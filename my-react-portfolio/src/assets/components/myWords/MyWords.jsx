import {PageTopic} from "../PageTopic"
import "./myWords.css"
import { Image } from "../projectImage/Image"
import coffeeImage from "../../otherImages/coffee.jpg"
import { PinkDivider } from "../pinkwave/PinkDivider"

export const MyWords = () => {
  return (
    <>
      <PinkDivider />
      <section className="myWords-wrapper">
        <PageTopic pageTopic={"My Words"} className={"myWords"} />
        <div>
          <Image
          image={coffeeImage}
          alt={"news paper and a cup of coffee"}
          className={"pink"}
        />
        <h4>To be continued...</h4>
        <p>
          This page is currently under construction. Check back later for
          updates!
        </p>
        </div>
        
      </section>
    </>
  );
};

//later will use component Heading, Tag and Image once get the articles