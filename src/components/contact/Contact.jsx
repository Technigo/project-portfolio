import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import data from "./data.json";
import Container from "../container/Container";

const Contact = () => {
    return (
        <Container>
            <h2 className="text-6xl font-bold text-technigo-blue text-center mb-16">
                {data.title}
            </h2>
            <img
                className="rounded-full w-40 mx-auto mb-8"
                src={data.imageUrl}
                alt={data.imageAlt}
            />
            <p className="text-center font-semibold text-xl mb-8">
                {data.name}
            </p>
            <div className="flex gap-4 justify-center">
                <a
                    aria-label="LinkedIn"
                    href={data.linkedinUrl}
                >
                    <IconBrandLinkedin className="text-gray-400 hover:text-gray-600" />
                </a>
                <a
                    aria-label="Github"
                    href={data.githubUrl}
                >
                    <IconBrandGithub className="text-gray-400 hover:text-gray-600" />
                </a>
            </div>
        </Container>
    );
}

export default Contact;