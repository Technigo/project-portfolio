
// import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { MyWordsCard } from "./MyWordsCard";

export const MyWords = ({ mywords }) => {
    return (
        <section>
            {mywords.map((myword, index) => (
                <div key={index}>
                    <MyWordsCard mywords={myword} />
                </div>

            ))}
        </section>
    );
}