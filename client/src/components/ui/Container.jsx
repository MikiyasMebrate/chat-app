import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Default from "./Default"



const Container = () => {
  return (
    <>
      <div className="layout-wrapper d-lg-flex  w-100">
        <NavBar />

        <div className="chat-leftsidebar">
          <div className="tab-content">
            <Outlet />
          </div>
        </div>

        <Default />

        
      </div>
    </>
  );
};

export default Container;
