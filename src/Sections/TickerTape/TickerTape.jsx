import { useState, useEffect } from 'react' 
import { Ticker } from "./Ticker.jsx"
import "./TickerTape.css"

const data = ["Frida Kristiansson", "|", "Frontend Developer", "|", "Frida Kristiansson", "|", "Frontend Developer", "|", "Frida Kristiansson", "|", "Frontend Developer", "|", "Frida Kristiansson", "|", "Frontend Developer", "|", "Frida Kristiansson", "|", "Frontend Developer", "|"]

export const TickerTape = () => {
    const [loading, SetLoading] = useState(true);
    const [phrases, SetPhrases] = useState([]);

    useEffect(() => {
      if(loading){
        SetPhrases(data)
        SetLoading(false)
      }
    },[loading])

  return (
    <section>
        {loading ? <p> LOADING ... </p>  :
            <div className="ticker-tape">
                <div className="ticker-tape-scroll">
                  {phrases.map((phrase, index) => (
                    <Ticker key={index} phrase={phrase} number={index} />
                  ))}
                </div>
            </div>
        }
    </section>
  );
}