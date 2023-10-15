import data from "./data.json";
import { IconArrowDown } from '@tabler/icons-react';

const Introducton = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto py-24 px-8">
                <img
                    className="block w-40 rounded-full mx-auto mb-8 md:hidden"
                    src={data.profileImage}
                    alt={data.profileImageAlt}
                />
                <h2 className="text-center md:text-left text-xl font-semibold mb-4">{data.title}</h2>
                <h1 className="text-center md:text-left text-6xl font-bold mb-8 text-blue-700">{data.subtitle}</h1>
                <div className="flex items-center gap-4">
                    <img
                        className="hidden w-40 rounded-full md:block"
                        src={data.profileImage}
                        alt={data.profileImageAlt}
                    />
                    <p className="text-center md:text-left font-medium">{data.introduction}</p>
                </div>
            </div>
            <IconArrowDown className="h-12 w-12 mx-auto text-blue-700" />
        </div>
    )
}

export default Introducton;