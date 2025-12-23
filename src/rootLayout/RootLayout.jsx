import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/Navbar";

function RootLayout(){

    return(
        <div>

          <Navbar />
          
          <Outlet />
          
          <Footer />

        </div>
    )
}

export default RootLayout;