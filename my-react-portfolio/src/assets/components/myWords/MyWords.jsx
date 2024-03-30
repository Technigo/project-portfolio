import { PageTopic } from "../smallComps/PageTopic"
import "./myWords.css"
import { Image } from "../projectImage/Image"
import coffeeImage from "../../otherImages/coffee.jpg"

export const MyWords = () => {

    return(
        <>
        <section className="myWords-wrapper">
            <PageTopic pageTopic={'My Words'} className={'myWords'} />
            <Image image={coffeeImage} alt={'news paper and a cup of coffee'} className={'pink'}/>
            <h4>To be continued...</h4>
            <p>This page is currently under construction. Check back later for updates!</p>
        </section>
        </> 
    )
}