import React from "react";
import "./css/Header.css"
import SocialLinks from "./SocialLinks";


const HeaderInfo = () => {
    return (
        <section className="section-header-info">
            <p className="small-text-header">I am Erika Olsson</p>
            <h1 className="h1-header">Frontend Developer</h1>
            <p className="long-text-header">Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities.
                She creates user-friendly applications and solves complex issues with ease. Her drive for excellence
                makes her a valuable asset to any project and a standout in the technology field.
            </p>

            <SocialLinks />
        </section>
    );
};

export default HeaderInfo;