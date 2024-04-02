import LiveDemo from "../../assets/Btn-live-demo.svg"
import ViewCode from "../../assets/Btn-github.svg"
import Arrow from "../../assets/Btn-arrow.svg"
import styles from "./Buttons.module.css"

export const BtnLiveDemo = ({ homepage }) =>{
  return(
    <div className={styles.btncontainer}>
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        <img src={LiveDemo} alt="github-icon"/>
        <p>Live demo</p>
      </a> 
    </div>
  )
}

export const BtnViewCode = ({ git_url }) =>{
  return(
    <div className={`${styles.btncontainer} ${styles.btnViewCode}`} >
      <a href={git_url} target="_blank" >
        <img src={ViewCode} width={48} alt="github-icon" />
        <p>View the code</p>
      </a> 
    </div>
  )
}

export const BtnArrow = () => {
  return (
    <div className={styles.arrowContainer}>
      <div className={styles.arrowDown}>
        <div className={styles.arrowUp}>
         <img src={Arrow} alt="arrow" /> 
        </div>
      </div>
    </div>
  )
}