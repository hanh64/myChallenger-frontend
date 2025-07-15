import { AppRoutes } from "@mychallenger/modules/app/AppRoutes";
import { AppWrapper } from "@mychallenger/modules/app/AppWrapper";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  </StrictMode>
);
