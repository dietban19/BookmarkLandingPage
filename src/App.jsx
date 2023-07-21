import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/home";
import Contacts from "./pages/Contacts/contacts";
import Navbar from "./components/navbar";
import Layout from "./components/common/layout";
const App = () => {
  // const location = useLocation();
  // const currentUrl = location.pathname;
  // console.log(currentUrl);

  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default App;
