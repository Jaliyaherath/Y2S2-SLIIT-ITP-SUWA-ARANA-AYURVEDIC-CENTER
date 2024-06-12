



import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import DoctorItems from "./components/DoctorItems";
import ItemDetailsModal from "./components/ItemDetailsModal";
import ConBox from "./components/ConBox";
import Layout from "./components/Layout"; // Import the Layout component
import SuccessPage from "./components/SuccessPage";
import Report from "./components/Report";
import TreatmentPage from "./components/TreatmentPage";
import CustomerTreatments from "./components/CustomerTreatments";
import TreatmentDetailsModal from "./components/TreatmentDetailsModal";
import ConfirmationBox from "./components/ConfirmationBox";
import DoctorPage from "./components/DoctorPage";
import PackagePage from "./components/PackagePage";
import ItemReport from "./components/ItemReport";
import PaymentPage from "./components/PaymentPage";
import CustomerPayments from "./components/CustomerPayments";
import PaymentReport from "./components/PaymentReport";
import AppointmentPage from "./components/AppointmentPage";
import CustomerAppointments from "./components/CustomerAppointments";
import AppointmentReport from "./components/AppoinmentReport";
import FeedbackPage from "./components/FeedbackPage";
import FeedbackDetails from "./components/FeedbackDetails";
import FeedbackReport from "./components/FeedbackReport"
import HomePage from "./components/HomePage"
/*import Navbar from './components/UserManagement/user/Navbar';
import Footer from './components/UserManagement/user/Footer';
import AdminHome from './components/UserManagement/admin/AdminHome';
import AdminUserMgt from './components/UserManagement/admin/AdminUserMgt';
import AdminLogin from './components/UserManagement/admin/AdminLogin';
import AdminRegister from './components/UserManagement/admin/AdminRegister';
import UserUpdate from './components/UserManagement/admin/UserUpdate';
import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import { AuthProvider } from './components/UserManagement/user/AuthContext';
import Username from './components/UserManagement/user/LoginUsername';
import Password from './components/UserManagement/user/LoginPassword';
import Register from './components/UserManagement/user/Register';
import MainProfile from './components/UserManagement/user/UserProfile';
import Profile from './components/UserManagement/user/UpdateProfile';
import Delete from './components/UserManagement/user/DeleteAccount';
import Recovery from './components/UserManagement/user/Recovery';
import Reset from './components/UserManagement/user/Reset';
import PageNotFound from './components/UserManagement/user/PageNotFound';*/




function App() {

 



  return (
    <Router>
   
      <Layout> 
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
        <Route path="/report">
            <Report />
          </Route>
          <Route path="/add">
            <ItemPage/>
          </Route>
          <Route path="/customer-treatments">
            <DoctorItems />
          </Route>
          <Route path="/confirmation">
            <ConBox 

        onConfirm={() => {
        // Handle confirmation logic here
          console.log("Confirmed");
       }}
       onCancel={() => {
       // Handle cancellation logic here
           console.log("Canceled");
      }}
            
            
            />


          </Route>
          <Route path="/success"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          <Route exact path="/" component={TreatmentDetailsModal} />



          <Route path="/rep">
            <ItemReport />
          </Route>
          <Route path="/ad">
            <TreatmentPage/>
          </Route>
          <Route path="/treatments">
            <CustomerTreatments />
          </Route>
          <Route path="/confirma">
            <ConfirmationBox 

        onConfirm={() => {
        // Handle confirmation logic here
          console.log("Confirmed");
       }}
       onCancel={() => {
       // Handle cancellation logic here
           console.log("Canceled");
      }}
            
            
            />
           




          </Route>
          <Route path="/succ"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          <Route exact path="/" component={TreatmentDetailsModal} />


          <Route path="/pe">
            <PackagePage />
          </Route>

          <Route path="/dd">
            <DoctorPage />
          </Route>

          <Route path="/succs">
            <SuccessPage />
          </Route>

        </Switch>



        <Route path="/reportPay">
            <PaymentReport />
          </Route>
          <Route path="/addPay">
            <PaymentPage/>
          </Route>
          <Route path="/customer-payments">
            <CustomerPayments />
          </Route>
          <Route path="/confirmationPay">
            <ConfirmationBox 

        onConfirm={() => {
        // Handle confirmation logic here
          console.log("Confirmed");
       }}
       onCancel={() => {
       // Handle cancellation logic here
           console.log("Canceled");
      }}
            
            
            />
           




          </Route>
          <Route path="/successPay"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          <Route path="/reportApp">
            <AppointmentReport />
          </Route>
          <Route path="/addApp">
            <AppointmentPage/>
          </Route>
          <Route path="/customer-appointments">
            <CustomerAppointments />
          </Route>
          <Route path="/confirmationApp">
            <ConfirmationBox 

        onConfirm={() => {
        // Handle confirmation logic here
          console.log("Confirmed");
       }}
       onCancel={() => {
       // Handle cancellation logic here
           console.log("Canceled");
      }}
            
            
            />
           
          </Route>
          <Route path="/successApp"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          <Route path="/feedbackreport">
            <FeedbackReport />
          </Route>
          <Route path="/feedback-add">
            <FeedbackPage/>
          </Route>
          <Route path="/customer-feedback">
            <FeedbackDetails />
          </Route>
          <Route path="/confirmation">
            <ConfirmationBox 

        onConfirm={() => {
        // Handle confirmation logic here
          console.log("Confirmed");
       }}
       onCancel={() => {
       // Handle cancellation logic here
           console.log("Canceled");
      }}
            
            
            />
           




          </Route>
          <Route path="/success"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          








      </Layout>
  
    </Router>
  );
}



export default App;
