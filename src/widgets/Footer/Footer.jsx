import s from "./Footer.module.scss";
import socialIcons from "../../img/Social.png";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.subscribeContainer}>
                <div className={s.subscribeContent}>
                    <h2 className={s.subscribeTitle}>
                        STAY UPTO DATE ABOUT<br /> OUR LATEST OFFERS
                    </h2>
                    <div className={s.subscribeForm}>
                        <div className={s.inputWrapper}>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className={s.input} 
                            />
                        </div>
                        <button className={s.subscribeBtn}>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            <div className={s.mainFooter}>
                <div className={s.container}>
                    <div className={s.colBrand}>
                        <h3>SHOP.CO</h3>
                        <p>We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                        
                        <div className={s.socials}>
                            <img src={socialIcons} alt="Social media icons" className={s.socialImage} />
                        </div>
                    </div>

                    <div className={s.colLinks}>
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#career">Career</a></li>
                        </ul>
                    </div>

                    <div className={s.colLinks}>
                        <h4>HELP</h4>
                        <ul>
                            <li><a href="#support">Customer Support</a></li>
                            <li><a href="#delivery">Delivery Details</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className={s.colLinks}>
                        <h4>FAQ</h4>
                        <ul>
                            <li><a href="#account">Account</a></li>
                            <li><a href="#manage">Manage Deliveries</a></li>
                            <li><a href="#orders">Orders</a></li>
                            <li><a href="#payments">Payments</a></li>
                        </ul>
                    </div>

                    <div className={s.colLinks}>
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="#ebooks">Free eBooks</a></li>
                            <li><a href="#tutorial">Development Tutorial</a></li>
                            <li><a href="#blog">How to - Blog</a></li>
                            <li><a href="#youtube">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>

                <div className={s.bottomBar}>
                    <div className={s.bottomContainer}>
                        <p>Shop.co © 2000-2023. All Rights Reserved</p>
                        <div className={s.payments}>
                            <span className={s.payCard}>VISA</span>
                            <span className={s.payCard}>MC</span>
                            <span className={s.payCard}>PP</span>
                            <span className={s.payCard}>AP</span>
                            <span className={s.payCard}>GP</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};