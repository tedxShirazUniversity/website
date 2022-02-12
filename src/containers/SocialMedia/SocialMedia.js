import React from 'react';
import style from "./SocialMedia.module.scss";
import {Title as TED,Instagram,LinkedIn,Email,Telegram } from '@material-ui/icons';
const SocialMedia = (props) => {
    return (
        <ul className={style.socialLinks}>
            <li><a href="https://www.instagram.com/tedxshirazuniversity/"><Instagram className={style.icon} /></a></li>
            <li><a href="https://www.linkedin.com/company/tedxshirazuniversity/"><LinkedIn className={style.icon} /></a></li>
            <li><a href="mailto:admin@tedxshirazuniversity.com"><Email className={style.icon} /></a></li>
            <li><a href="https://t.me/TEDxShirazUniversity"><Telegram className={style.icon} /></a></li>
            <li><a href="https://www.ted.com/tedx/events/33230"><TED className={style.icon} /></a></li>
        </ul>
    );
}
 
export default SocialMedia;



/* 
<li><a className={[style.icon,"ico-instagram"].join(" ")} href="https://www.instagram.com/tedxshirazuniversity/" target="_blank" rel="noopener noreferrer"><button>Instagram</button></a></li>
<li><a className={[style.icon,"ico-linkedin"].join(" ")} href="https://www.linkedin.com/company/tedxshirazuniversity/" target="_blank" rel="noopener noreferrer"><button>Linkedin</button></a></li>
<li><a className={[style.icon,"ico-email"].join(" ")} href="mailto:admin@tedxshirazuniversity.com" target="_blank" rel="noopener noreferrer"><button>Email</button></a></li>
<li><a className={[style.icon,"ico-telegram"].join(" ")} href="https://t.me/TEDxShirazUniversity" target="_blank" rel="noopener noreferrer"><button>Telegram</button></a></li>
<li><a className={[style.icon,"ico-ted"].join(" ")} href="https://www.ted.com/tedx/events/33230" target="_blank" rel="noopener noreferrer"><button>TED</button></a></li> 
*/
