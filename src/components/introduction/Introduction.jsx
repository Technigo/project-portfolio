import Container from "../container/Container";
import data from "./data.json";
import { IconArrowDown } from '@tabler/icons-react';

const Introducton = () => {
    return (
        <Container className="bg-white">
            <img
                className="block w-40 rounded-full mx-auto mb-8 md:hidden"
                src={data.profileImage}
                alt={data.profileImageAlt}
            />
            <h2 className="text-center md:text-left text-xl font-semibold mb-4">{data.title}</h2>
            <h1 className="text-center md:text-left text-6xl font-bold mb-8 text-technigo-blue">{data.subtitle}</h1>
            <div className="flex gap-4 items-center mb-16">
                <img
                    className="hidden w-40 rounded-full md:block"
                    src={data.profileImage}
                    alt={data.profileImageAlt}
                />
                <p className="text-center md:text-left font-medium">{data.introduction}</p>
            </div>
            <IconArrowDown className="h-12 w-12 mx-auto text-technigo-pink animate-bounce" />
        </Container>
    )
}

export default Introducton;