import React from "react";
import Root from "./routes/root/root.route";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./routes/shared-layout/shared-layout";

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='login' element={<>Login here</>} />
            </Route>
        </Routes>
    );
}
