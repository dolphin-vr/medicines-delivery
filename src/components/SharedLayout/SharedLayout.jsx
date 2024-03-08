import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  position: "center-top",
  style: {
    width: "100%",
    fontSize: "22px",
  },
  success: {
    duration: 5000,
    style: {
      background: "#b2fa6f",
    },
  },
  loading: {
    style: {
      background: "#adffe0",
    },
  },
  error: {
    style: {
      background: "#b62020",
    },
  },
};

export const SharedLayout = ()=>{
   return (
     <>
       <Header />
       <Suspense fallback={<div>Loading page...</div>}>
         <Outlet />
       </Suspense>
       <Toaster toastOptions={toastOptions} />
     </>
   );
}
