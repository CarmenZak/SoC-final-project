//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
/* import { AuthProvider } from "./Context/AuthContext.tsx"; */
import { SocketProvider } from "./Context/SocketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    {/*  <AuthProvider> */}
    <SocketProvider>
      <App />
    </SocketProvider>
    {/* </AuthProvider> */}
  </Router>
);
