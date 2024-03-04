{/* I realize this probably isn't the most elegant solution but I didn't find a better way to make sure there were no emply space in the marquee-animation */}
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-pink-300 to-orange-300 mb-0 py-8 relative flex flex-row">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
                <span className="text-white text-xl font-medium">Sara Dahlström · Frontend Developer · </span>
            </div>
        </div>
    );
}

export default Footer;