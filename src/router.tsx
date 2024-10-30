import { createBrowserRouter, NavLink, Outlet } from 'react-router-dom'
import Calculator from '@/components/Calculator'
import CoursesList from '@courses/CoursesList'
import Shapes from '@/components/Shapes'
import Form from '@/components/Form';
import FormValidate from '@/components/Form/FormValidate';
import Pitfall from "@/components/Calculator/Pitfall";
import { WrapDiv } from '@/styles/app'



export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: "/", element: <Calculator /> },
            { path: "/courses", element: <CoursesList /> },
            { path: "/pitfall", element: <Pitfall /> },
            { path: "/shapes", element: <Shapes /> },
            { path: "/form", element: <Form /> },
            { path: "/form-validate", element: <FormValidate /> },
        ]
    }
])


function NavLayout() {
    return (
        <WrapDiv>
            <nav className="nav">
                <NavLink className="nav__item" to="/">
                    Calculator
                </NavLink>
                <NavLink className="nav__item" to="/courses">
                    Courses
                </NavLink>

                <NavLink className="nav__item" to="/pitfall">
                    Pitfall TS
                </NavLink>
                <NavLink className="nav__item" to="/shapes">
                    Shapes
                </NavLink>
                <NavLink className="nav__item" to="/form">
                    Form
                </NavLink>
                <NavLink className="nav__item" to="/form-validate">
                    Form validate
                </NavLink>
            </nav>
            <Outlet />
        </WrapDiv>
    )
}