import { useUser, RedirectToSignIn, SignInButton } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedPage({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("Please login First");
    }
  }, [isSignedIn]);
  return isSignedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedPage;
