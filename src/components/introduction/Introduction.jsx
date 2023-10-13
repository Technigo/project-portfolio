import { ArrowDownIcon } from '@heroicons/react/24/solid';
import data from "./data.json";

const Introducton = () => {
    return (
        <div className="py-8">
            <div className="container mx-auto py-32 px-8">
                <img
                    className="block w-40 rounded-full mx-auto mb-8 md:hidden"
                    src={data.profileImage}
                    alt={data.profileImageAlt}
                />
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <h1 className="text-blue-700 font-bold text-4xl mb-6">{data.subtitle}</h1>
                <div className="flex items-center gap-4">
                    <img
                        className="hidden w-40 rounded-full md:block"
                        src={data.profileImage}
                        alt={data.profileImageAlt}
                    />
                    <p>{data.introduction}</p>
                </div>
            </div>
            <ArrowDownIcon className="h-8 mx-auto text-blue-700" />
        </div>
    )
}

export default Introducton;