import { ContactInfoButton } from "../components/ContactInfoComponent/ContactInfoButton";
import { Headline } from "../components/Headline";
import { ImagePortrait } from "../components/ImagePortrait";
import { MediumHeadline } from "../components/MediumHeadline";


export const ContactInfoPage = () => {
    const headerText = "Let's talk";
    const contactInformation = [
        { id: 'contact0', text: "Veronica Åström" },
        { id: 'contact1', text: "+46(0)727 13 44 83" },
        { id: 'contact2', text: "v.aastrom@gmail.com" }
    ];

    return (
        <div>
            <Headline className="big-heading blue-h1" headerText={headerText} />
            <ImagePortrait />
            <div className="contact-information">
                {contactInformation.map((info) => (
                    <MediumHeadline
                        key={info.id}
                        mediumSizeHeader={info.text}
                        useSpan={false}
                    />
                ))}
            </div>
            <ContactInfoButton />
        </div>
    );
};
