import { SectionHeader } from '../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../UI/SmallerHeader/SmallerHeader.jsx';
import { Photos } from '../UI/Photos/Photos.jsx';
import { Hero } from './Hero/Hero.jsx';
import { Tech } from './Tech/Tech.jsx';
import { FeaturedProjects } from './FeaturedProjects/FeaturedProjects.jsx';
import { MyWords } from './MyWords/MyWords.jsx';
import { Skills } from './Skills/Skills.jsx';
import { Contact } from './Contact/Contact.jsx';
import { Footer } from './Footer/Footer.jsx';
import style from './LayoutWrapper.module.css';

export const LayoutWrapper = () => {
    //do i need classnames here for each layout section?
    return (
        <>
            <div className={style.layout}>
                <header>
                    <Hero />
                </header>
                <main>
                    <section>
                        <Tech />
                    </section>
                    <section>
                        <FeaturedProjects />
                    </section>
                    <section>
                        <MyWords />
                    </section>
                    <section>
                        <Skills />
                    </section>
                    <section>
                        <Contact />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
            <SmallerHeader />
            <SectionHeader
            />
            <Photos />
        </>
    )
}
