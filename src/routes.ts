// pages
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'user-info-route',
        title: 'User Info',
        path: '/user/:id',
        enabled: true,
        component: UserInfo
    },
]