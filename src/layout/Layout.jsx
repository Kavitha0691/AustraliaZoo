import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Layout = () => (
  <>
    <Header />
    <Navigation />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;