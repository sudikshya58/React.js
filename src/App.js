import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./Page/Login";
import { Register } from "./Page/Register";
import { Home } from "./Page/Home";
import { Toaster } from "react-hot-toast";
import { ManageProfile } from "./Page/ManageProfile";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
   <Router>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/manageprofile" element={<ManageProfile/>}/>
    </Routes>
    <Toaster position="top-right" />
   </Router>
   </Provider>
  );
}

export default App;
