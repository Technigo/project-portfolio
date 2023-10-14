import style from './main-wrapper.module.css'
import { Introduction } from './introduction/introduction.jsx'
import { Tech } from './tech/tech.jsx'
import { MyProjects } from './myprojects/myprojects.jsx'
//import { MyWords } from './mywords/mywords.jsx'
//import { Skills } from './skills/skills.jsx'
//import { Contact } from './contact/contact.jsx'

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
            </main>
        </div>
    )
}