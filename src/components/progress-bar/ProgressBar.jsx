import './progressbar.css';


export const ProgressBar = ( { progress }) => {
    return (
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    );
};