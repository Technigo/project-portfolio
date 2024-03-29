import { PageTopic } from "../smallComps/PageTopic"
import "./myWords.css"
import { Image } from "../smallComps/Image"
// import {PinkPath} from "../iconfoler/PinkPath"

export const MyWords = () => {

    const articlePic1 = "../../../../public/images/coffee.jpg"
    return(
        <>
     
        <section className="myWords-wrapper">
            <PageTopic pageTopic={'My Words'} className={'myWords'} />
            <Image image={articlePic1} alt={'news paper and a cup of coffee'} className={'pink'}/>
            <h4>To be continued...</h4>
            <p>This page is currently under construction. Check back later for updates!</p>
        </section>
        </>
        
    )
}