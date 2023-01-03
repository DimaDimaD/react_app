import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostIdPage, exact: true},
    {path: '/', element: About, exact: true},
    {path: '/*', element: ErrorPage, exact: true}
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
    {path: '/*', element: Login, exact: true}
]