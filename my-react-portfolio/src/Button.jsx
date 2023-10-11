export const Button = ({ icon, label, link, description }) => { //Props
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" title={description}>
            <button
                className={`${label}-button`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        window.open(link, '_blank')
                    }
                }}
            >
                {icon}
                <span>{label}</span>
            </button>
        </a>
    );
};


//Reusable button component