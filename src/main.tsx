import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from '@/router'
import "./index.css";
import { ThemeContextProvider } from '@picker/themeContext'
import { RGBContextProvider } from '@picker/context'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RGBContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </RGBContextProvider>
  </React.StrictMode>
);
