import React, {useState} from 'react';
import {privateRoutes, publicRoutes} from "../router";
import {Route, Routes} from "react-router-dom";
import MyContacts from "../pages/myContacts";
import Login from "../pages/Login";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: React.FunctionComponent = () => {
    const isAuth = useTypedSelector(state => state.app.isAuth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<MyContacts/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;