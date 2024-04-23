import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import HomeMain from "./Pages/HomeMain.tsx";
import Branding from "./Pages/Branding.tsx";
import JoinRoles from "./Pages/JoinRoles.tsx";
import Commands from "./Pages/Commands.tsx";
import Logging from "./Pages/Logging.tsx";
import Messages from "./Pages/ChannelContent.tsx";
import Notifications from "./Pages/Notifications.tsx";
import ReactionRoles from "./Pages/ReactionRoles.tsx";
import Status from "./Pages/Status.tsx";
import WelcomeMes from "./Pages/WelcomeMes.tsx";
import ErrorRouter from "./Pages/ErrorRouter.tsx";
import { RecoilRoot } from "recoil";
import LevelSetup from "./Pages/LevelSetup.tsx";
import ProtectedRoute from "./Pages/ProtectedRoute.tsx";
import Login from "./Pages/Login.tsx";
import { MainRoute } from "./Pages/MainRoute.tsx";
import { ServerlistPage } from "./Pages/ServerlistPage.tsx";
import LeaveMessage from "./Pages/LeaveMessage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainRoute />,
        children: [
          {
            path: "",
            element: <Home />,
            errorElement: <ErrorRouter />,
            children: [
              {
                path: "",
                element: <HomeMain />,
              },
              {
                path: "branding",
                element: <Branding />,
              },
              {
                path: "join-roles",
                element: <JoinRoles />,
              },
              {
                path: "commands",
                element: <Commands />,
              },
              {
                path: "logging",
                element: <Logging />,
              },
              {
                path: "channel-content",
                element: <Messages />,
              },
              // {
              //   path: "moderation",
              //   element: <Moderation />,
              //   children: [
              //     {
              //       path: "message-type",
              //       element: <MessageType />,
              //     },
              //   ],
              // },
              {
                path: "level-setup",
                element: <LevelSetup />,
              },
              {
                path: "notification",
                element: <Notifications />,
              },
              {
                path: "reaction-roles",
                element: <ReactionRoles />,
              },
              {
                path: "Status",
                element: <Status />,
              },
              {
                path: "welcome-message",
                element: <WelcomeMes />,
              },
              {
                path: "leave-message",
                element: <LeaveMessage />,
              },
            ],
          },
        ],
      },
      {
        path: "/serverlist",
        element: <ServerlistPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
