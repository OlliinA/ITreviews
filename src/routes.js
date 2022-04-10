import {
    ADMIN_ROUTE,
    COURSE_ROUTE, FEEDBACK_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    REVIEWS_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Auth from "./components/Auth";
import Course from "./pages/Course";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: Course
    },
    {
        path: REVIEWS_ROUTE + '/:id',
        Component: Reviews
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    }

]