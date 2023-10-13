import { Headline } from "../components/Headline";
import { Textbox } from "../components/Textbox";

export const ContactInfo = () => {
    const headerText = "Let's talk";
    const contactInformation = [
        { id: 'contact0', text: "Veronica Åström" },
        { id: 'contact1', text: "+46(0)727 13 44 83" },
        { id: 'contact2', text: "v.aastrom@gmail.com" }
    ];

    return (
        <div>
            <Headline headerText={headerText} />
            <div className="contact-information">
                {contactInformation.map((info) => (
                    <Textbox key={info.id} text={info.text} />
                ))}
            </div>
        </div>
    );
};
