import { Email } from './Email.jsx';
import {Image} from './Image.jsx';
import { Socialbar } from './Socialbar.jsx';

import './contact.css';

export const Contact = () => {

  return (
    <section className="contact">
      <h2>Let&lsquo;s talk</h2>
      <Image />
      <div className="contact-info">
        <h3>Kathinka Sewell</h3>
        <Email />
        <Socialbar />
      </div>
    </section>



  )
}