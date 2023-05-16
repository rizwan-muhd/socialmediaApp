import HomePage from "./screens/homepage";
import LoginPage from "./screens/loginpage";
import ProfilePage from "./screens/profilepagepage";
import SignUpPage from "./screens/signuppage";
import ResetPassword from "./screens/resetPassword";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "./auth/authGuard";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/home",
      element: (
        <AuthGuard>
          <HomePage />
        </AuthGuard>
      ),
    },
    {
      path: "/profile/:id",
      element: (
        <AuthGuard>
          <ProfilePage />
        </AuthGuard>
      ),
    },
    {
      path: "/resetpassword",
      element: <ResetPassword />,
    },
  ]);
}
