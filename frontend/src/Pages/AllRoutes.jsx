import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/userdetailpage" element={<UserDetailPage />} />
    </Routes>
  );
};
