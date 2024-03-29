import { PageTopic } from "../smallComps/PageTopic"
import "./myWords.css"

export const MyWords = () => {
    return(
        <section className="myWords-wrapper">
            <PageTopic pageTopic={'My Words'} className={'myWords'} />
            <h4>To be continued...</h4>
            <p>This page is currently under construction. Check back later for updates!</p>
        </section>
    )
}