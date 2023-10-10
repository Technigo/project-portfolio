import './button.css'
export const Button = ({ text, hoverColor }) => {
    return (
        <div>
            <button className={`button ${hoverColor}`}><img src='../assets/github.png'/>{text}</button>
        </div>
    )
}


// {/* <div>
//             {/* Text and the onclick is passed as props so that it can be either the default ("Next") or changed dynamically late, for example when restarting game. */}
//             <button className={`submit-btn ${longOrShortClass}`} onClick={onClick} type="submit">{text || 'Next'}</button>
//         </div> */}