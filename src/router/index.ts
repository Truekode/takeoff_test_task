import React from "react";
import MyContacts from "../pages/myContacts";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: MyContacts, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]