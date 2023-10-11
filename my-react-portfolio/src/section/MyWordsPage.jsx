import { Headline } from "../components/Headline";
import { MyWords } from "../components/MyWordsComponent/MyWords";



export const MyWordsPage = () => {
    let headerText = "My Words";


    return (
        <div>
            <Headline headerText={headerText} />
            <MyWords />
        </div>
    )
}
