import React from "react";
import "./css/Header.css"
import HeaderInfo from "./HeaderInfo";
import ProfileImage from "./ProfileImage";



const Header = () => {
    return (
        <header className="header-portfolio">
            <div className="header-pf-flex">
                <HeaderInfo />
                <ProfileImage />
            </div>
        </header>
    );
};

export default Header;