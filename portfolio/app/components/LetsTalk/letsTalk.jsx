import Image from "next/image";
import GitButton from "./gitButton";
import InstagramButton from "./InstagramButton";
import LinkedInButton from "./linkedInButton";
import Footer from "./Footer";

const LetsTalk = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-screen min-h-screen bg-white">
                <div className="mx-4 md:mx-16 lg:mx-60">
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent text-center">Let's talk</h2>
                    <div className="mt-16 gap-16">
                        <Image
                            className="mx-auto"
                            src="/ProfileImage/ProfileImg.png"
                            width={250}
                            height={250}
                            alt="Profile"
                        />
                        <div className="text-center font-semibold text-xl mb-8">
                            <p>Sara Dahlström</p>
                            <p><a href="mailto:sara@dahlstrom.se" className="hover:text-pink-500">sara@dahlstrom.se</a></p>
                            <p><a href="tel:+46702724743" className="hover:text-pink-500">+4670 272 4743</a></p>
                        </div>
                        <div className="flex flex-row justify-center gap-8">
                            <GitButton />
                            <InstagramButton />
                            <LinkedInButton />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LetsTalk;
