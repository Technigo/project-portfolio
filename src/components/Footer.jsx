import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [text, setText] = useState("🌸Alexandra Meija- Webdeveloper  🌸 Alexandra Meija- Webdeveloper  🌸 Alexandra Meija- Webdeveloper  🌸 Alexandra Meija- Webdeveloper 🌸 Alexandra Meija- Webdeveloper 🌸 Alexandra Meija- Webdeveloper 🌸 Alexandra Meija- Webdeveloper 🌸 Alexandra Meija- Webdeveloper  🌸 Alexandra Meija- Webdeveloper🌸");


  return (
    <div className="footer" >
      <div className="footer-text">{text}</div>
    </div>
  );
}

export default Footer;