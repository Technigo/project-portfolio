import { PageTopic } from "../smallComps/PageTopic"
import "../smallComps/pageTopic.css"

export const MyWords = () => {
    return(
        <div>
            <PageTopic pageTopic={'MY WORDS'} className={'myWords'} />
            <h4>To be continued...</h4>
            <p>This page is currently under construction. Check back later for updates!</p>
        </div>
    )
}