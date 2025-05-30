import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GroupPage from "./pages/GroupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mammals" element={<GroupPage category="Mammals" />} />
        <Route path="/birds" element={<GroupPage category="Birds" />} />
        <Route path="/reptiles" element={<GroupPage category="Reptiles" />} /> */}

        <Route path="/:category" element={<GroupPage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;