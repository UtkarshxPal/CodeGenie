import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

function ProtectedPage({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn />;
  return <div>{children}</div>;
}

export default ProtectedPage;
