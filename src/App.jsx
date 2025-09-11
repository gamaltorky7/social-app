import React from "react";
import {  createHashRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout/Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from './Pages/Home/Home';
import Notfound from "./component/Notfound/Notfound";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./Context/UserContext";
import { ProtectedRouting } from './ProtectedRouting/ProtectedRouting';
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile";
import PostDetails from './Pages/PostDetails/PostDetails';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Welcome from "./Pages/Welcome/Welcome";


export default function App() {
  let routes = createHashRouter([
    {
      path: "/",element: <Layout />,
      children: [
        { index:"true", element: <Welcome />  },
        { path:"home", element:<ProtectedRouting> <Home/> </ProtectedRouting>  },
        { path: "postdetails/:postId", element: <ProtectedRouting><PostDetails /></ProtectedRouting> },
        { path: "Profile", element: <ProtectedRouting><Profile /></ProtectedRouting> },
        { path: "editprofile", element: <ProtectedRouting><EditProfile /></ProtectedRouting> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions:{
      queries: {
        gcTime: 15000 , 
        retry: false,
      }
    }
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
        <RouterProvider router={routes} />
        <Toaster />
        </UserContextProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
}
