import React from 'react';
import style from "./Footer.module.scss";
import {Link} from "react-router-dom";
import SocialMedia from "../../containers/SocialMedia/SocialMedia";
import NewsLetter from "../NewsLetter/NewsLetter";
const Footer = () => {
    return ( 
        <footer className={style.footer}>
            <div className={style.row1}>
                <div className={style.links}>
                    <Link to="/" >
                        <img className={style.logo} draggable="false" width="200" src={require("../../assets/images/logos/TEDxShirazuniversityLogo/logo-white-text.png")} alt=""/>
                    </Link>
                    <div className={style.socialLinksContainer}>
                        <SocialMedia />
                    </div>
                </div>
                <div className={style.newsletter}>
                    <h4 className={style.title}>Join our newsletter</h4>
                    <p className={style.description}>
                        Subscribe to hear about new talks, meetups, and our latest news.
                    </p>
                    <div className={style.formContainer}>
                        <NewsLetter />
                    </div>
                </div>
            </div>
            <div className={style.divider}></div>
            <div className={style.row2}>
                <div className={style.license}>
                    This independent TEDx event is operated under license from TED.
                </div>
                <div className={style.copyright}>
                    Copyright &copy; TEDxShirazUniversity 2020. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;