import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutePage from "../pages/AboutePage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import UsersDetailsPage from "../pages/UsersDetailsPage";
import Users from "../users/Users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutePage />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
