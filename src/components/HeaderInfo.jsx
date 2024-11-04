import React from "react";
import "./css/Header.css"
import SocialLinks from "./SocialLinks";
import { H1, H3, P } from "./Typography"


const HeaderInfo = () => {
    return (
        <section className="section-header-info">
            <H3>I am Erika Olsson</H3>
            <H1 heading={"Frontend Developer"} spacing={"spacing"} />
            <P>Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities.
                She creates user-friendly applications and solves complex issues with ease. Her drive for excellence
                makes her a valuable asset to any project and a standout in the technology field.
            </P>

            <SocialLinks />
        </section>
    );
};

export default HeaderInfo;