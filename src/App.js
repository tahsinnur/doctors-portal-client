import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/appointment" element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome/>}/>

              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment/>}/>
      
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin />
              </AdminRoute>} />

              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor />
              </AdminRoute>} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
