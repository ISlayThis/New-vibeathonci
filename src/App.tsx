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

export default function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}
