import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import "./style.css";
import App from "./App.js";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/timer"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
