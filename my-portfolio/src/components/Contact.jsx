import SocialLinks from "./SocialLinks"
import { H2, P } from "./Typography"

const Contact = () => {
    return (
        <section>
            <article>
                <H2>Let's talk</H2>
                <P>Erika Olsson</P>
                <P>+46(0)70 945 94 06</P>
                <P>erikamolsson87@gmail.com</P>
            </article>
            <SocialLinks />
        </section>       
    )
}

export default Contact;