// TopSection.jsx

import './TopSection.css'
import { ProfileImage } from './ProfileImage.jsx'
import { ProfileInfo } from './ProfileInfo.jsx'

export const TopSection = () => {
  return (
    <div class="top-section-wrapper">
    <div className ="top-section">
      <ProfileInfo />
    </div>

    <div className="profile-img-section">
      <ProfileImage />
    </div>
    </div>
  );
};
