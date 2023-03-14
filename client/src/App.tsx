import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Statistics from "./pages/Statistics";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import Customers from "./pages/Customers";
import Groups from "./pages/Groups";
import Ads from "./pages/Ads";
import Categories from "./pages/Categories";
import Login from "./authComponents/Login";
import Signup from "./authComponents/Signup";
import NotFound from "./pages/NotFound";
import LoggedLayout from "./layouts/LoggedLayout";
import "@fontsource/montserrat";
import "./styles/App.css";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoggedLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
