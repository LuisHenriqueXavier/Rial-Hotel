import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Facilities } from "./pages/Facilities";
import { Rooms } from "./pages/Rooms";
import { Contact } from "./pages/Contact";
import { Price } from "./pages/Price";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/price" element={<Price />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}