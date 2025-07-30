import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartedPage from './page/StartedPage';
import LoginPage from './Login/LoginPage';
import LoginForm from './Login/LoginForm';
import ForgotPassword from './Login/ForgotPassword';
import ResetMobileNo from './Login/ResetMobileNo';
import ResetEmail from './Login/ResetEmail';
import ResetNewPassword from './Login/ResetNewPassword';
import ResetPassVerify from './Login/ResetPassVerify';

let router = createBrowserRouter([
  {
    path: "/",
    element: <StartedPage></StartedPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
    children: [
      {
        path: "/login",
        element: <LoginForm></LoginForm>
      },
      {
        path: "/login/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/login/resetMobileNo",
        element: <ResetMobileNo></ResetMobileNo>
      },
      {
        path: "/login/resetEmail",
        element: <ResetEmail></ResetEmail>
      },
      {
        path: "/login/resetNewPassword",
        element: <ResetNewPassword></ResetNewPassword>
      },
      {
        path: "/login/resetPassVerify",
        element: <ResetPassVerify></ResetPassVerify>
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
