import Image from "next/image";
import Arrow from "./Arrow";

const Intro = () => {
    return (
        <section className="flex flex-col items-center bg-white w-screen min-h-screen">
            <div className="flex-grow mt-16 justify-center mx-4 md:mx-16 lg:mx-60 flex flex-col">
                {/* This image will be visible on mobile devices to make sure it is shown on top */}
                <Image
                className="mx-auto md:hidden"
                src="/ProfileImage/ProfileImg.png"
                width={250}
                height={250}
                alt="Profile"
                />
                <h2 className="text-center md:text-left text-xl font-semibold mb-4">My name is Sara and I am a</h2>
                <h1 className="text-center md:text-left text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Frontend Developer</h1>
                    <div className="flex flex-row gap-4 items-center mb-16">
                        {/* This image will be visible on larger devices */}
                        <Image
                        className="hidden mx-auto md:block"
                        src="/ProfileImage/ProfileImg.png"
                        width={250}
                        height={250}
                        alt="Profile"
                        />
                        {/* This text is centered on mobile but left-aligned on larger devices */}
                        <p className="text-center md:text-left font-medium">I have soon completed the Frontend Developer bootcamp at Technigo, which has been amazing and taught me more than I could ever imagine. But you can see me as an Open Beta ready for launch - although I might not have years of experience in the field, I have a true passion for developing apps and websites that are both visually appealing and functional. I'm eagerly looking forward to exploring and learning new frameworks, ready to bring my unique blend of creativity and technical skill to new challenges.</p>
                    </div>
                </div>
            {/* The arrow component I imported from the same folder */}
            <div className="pb-4 px-auto mb-4">
                <Arrow />
            </div>
        </section>
    )
}

export default Intro;
