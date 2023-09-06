import React, { useContext } from "react";
import Root from "./routes/root/root.route";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./routes/shared-layout/shared-layout";
import Auth from "./routes/auth/auth.route";
import Posts from './routes/posts/posts.route';
import Error from './routes/error/error.route';
import { UserContext } from "./context/user-context";

export default function App() {
    const { currentUser } = useContext(UserContext);

    const ProtectedRouteOnLogin = ({ children }) => {
        if(currentUser) {
            return <Navigate to="/" />;
        }
    
        return children;
    };

    const ProtectedRouteNoLogin = ({ children }) => {
        if(!currentUser) {
            return <Navigate to="/login" />;
        }
    
        return children;
    };

    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='login' element={
                    <ProtectedRouteOnLogin>
                        <Auth />
                    </ProtectedRouteOnLogin>
                } />

                <Route path='posts/*' element={
                    <ProtectedRouteNoLogin>
                        <Posts />
                    </ProtectedRouteNoLogin>
                } />

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
}
