import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './pages/home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from './pages/registration/Registration';
import { LoginPage } from './pages/login/Login';
import { AuthentificationProvider } from './components/AuthentificationProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <AuthentificationProvider>
      <RouterProvider router={router} />
    </AuthentificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
