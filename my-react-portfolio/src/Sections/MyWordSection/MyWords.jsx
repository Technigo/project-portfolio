
// import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { MyWordsCard } from "./MyWordsCard";

export const MyWords = ({ mywords }) => {
    return (
        <section>
            {mywords.map((mywords, index) => (
                <div key={index}>
                    <MyWordsCard mywords={mywords} />
                </div>

            ))}
        </section>
    );
}