import s from "./Header.module.scss";
import logo from "../../img/Header.logo.svg";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.topBar}>
                <p>Sign up and get 20% off your first order. <a href="#signup">Sign Up Now</a></p>
            </div>
            <div className={s.wrapper}>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.item}>Shop</li>
                        <li className={s.item}>On Sale</li>
                        <li className={s.item}>New Arrivals</li>
                        <li className={s.item}>Brands</li>
                    </ul>
                </nav>
                <div className={s.searchContainer}>
                    <input 
                        type="text" 
                        placeholder="Search for products..." 
                        className={s.searchInput} 
                    />
                </div>
                <img src={logo} alt="SHOP.CO" className={s.logo} />
            </div>
        </header>
    );
};