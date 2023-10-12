
import style from './Buttons.module.css';
import { Photos } from '../Photos/Photos.jsx';

export const Buttons = ({ className }) => {
    const buttonsArray = [
        //{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/ditt-navn/', mode: 'linkedin' }, fjern label her
        { url: 'https://github.com/elbines', mode: 'github' },
    ];

    return (
        <div className={`${style.buttonsContainer} ${className || ''}`}>
            {buttonsArray.map((button, index) => (
                <a key={index} href={button.url} target="_blank" rel="noopener noreferrer" className={style.button}>
                    <Photos selectedMode={button.mode} />
                    {button.label}
                </a>
            ))}
        </div>
    );
};
