// Bio.jsx

import { About } from "./About/About";
import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import "./Bio.css"

export const Bio = () => {
  return (
    <header className="header-container">
      <About />
      <ProfilePicture />
    </header>

  );
};
