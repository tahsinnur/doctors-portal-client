import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        saveUser(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });

        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || '/';
        navigate(destination);
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => {
          setToken(idToken);
        })
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth])

  useEffect(() => {
    fetch(`https://gentle-savannah-03074.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://gentle-savannah-03074.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut
  }
}

export default useFirebase;