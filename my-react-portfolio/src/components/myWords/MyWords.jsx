import {PageTopic} from "../PageTopic"
import "./myWords.css"
import { Image } from "../projectImage/Image"
import coffeeImage from "../../otherImages/coffee.jpg"
import { PinkDivider } from "../pinkwave/PinkDivider"
import {Tag} from "../tag/Tag"
import {Read} from "../iconfoler/Read"

export const MyWords = () => {
  return (
    <>
      <PinkDivider />
      <section className="myWords-wrapper">
        <PageTopic pageTopic={"My Words"} className={"myWords"} />
        <div className="word-container">
          <div className="wordbox">
          <Image
            image={coffeeImage}
            alt={"news paper and a cup of coffee"}
            className={"pink"}
          />
          <div className="header-box">
            <Tag topic={"May 2024"} />
          <h4 className="word-header">How to stop being scared:<br/>
           Learning to love code</h4>
          </div>
          
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.
          </p>
          <div className="readBtn" aria-label="Button of reading article">
            <a href="https://www.linkedin.com/in/trista-shan-62074471/">
              <Read />
              Read article
            </a>
          </div>
        </div>
        <div className="wordbox">
          <Image
            image={coffeeImage}
            alt={"news paper and a cup of coffee"}
            className={"pink"}
          />
         <div className="header-box">
          <Tag topic={"May 2024"} />
          <h4 className="word-header">How to stop being scared:<br/>
           Learning to love code</h4>
         </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.
          </p>
          <div className="readBtn" aria-label="Button of reading article">
            <a href="https://www.linkedin.com/in/trista-shan-62074471/">
              <Read />
              Read article
            </a>
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
};