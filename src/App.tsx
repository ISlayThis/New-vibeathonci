/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Competition } from "./pages/Competition";
import { Formations } from "./pages/Formations";
import { Program } from "./pages/Program";
import { Speakers } from "./pages/Speakers";
import { Registration } from "./pages/Registration";

// Imports CMS Admin
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminTheme } from "./pages/admin/AdminTheme";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { ThemeProvider } from "./components/cms/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="competition" element={<Competition />} />
            <Route path="formations" element={<Formations />} />
            <Route path="programme" element={<Program />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="inscription" element={<Registration />} />
          </Route>

        {/* Route Login (hors layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Routes CMS Admin (protégées par layout) */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="theme" element={<AdminTheme />} />
            {/* Les sous-routes admin (pages, media) seront ajoutées ici */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
