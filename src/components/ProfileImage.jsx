import profileImage from "../assets/bilderika.jpg";



const ProfileImage = () => {
    return (
        <section className="section-header-image">
            <img src={profileImage} alt="Profilbild Erika Olsson" />
        </section>
    )
}

export default ProfileImage;