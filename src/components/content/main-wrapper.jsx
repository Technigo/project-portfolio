//NOT DONE:
//Have written in each component what is not finished yet
//I have removed "My words" for now as I have no articles, but I started making it in code in case I want to use it later
//Not done responsiveness and adapting to different screens
//Not done acessability

import style from './main-wrapper.module.css'
import { Introduction } from './introduction/introduction.jsx'
import { Tech } from './tech/tech.jsx'
import { MyProjects } from './myprojects/myprojects.jsx'
//import { MyWords } from './mywords/mywords.jsx'
import { Skills } from './skills/skills.jsx'
import { Contact } from './contact/contact.jsx'
import { Footer } from './footer/footer.jsx'

export const MainWrapper = () => {

    return (
        <div className={style.wrapper}>
            <header>
                <Introduction />
            </header>
            <main>
                <section>
                    <Tech />
                </section>
                <section>
                    <MyProjects />
                </section>
                {/*<section>
                    <MyWords />
    </section>*/}
                <section>
                    <Skills />
                </section>
                <section>
                    <Contact />
                </section>
                <section>
                    <Footer />
                </section>
            </main>
        </div>
    )
}