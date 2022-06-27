import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import {PhoneIcon, ShoppingCartIcon} from "@heroicons/react/solid"

const Navbar = () => {
    return (
    <>
        <div className={styles.container}>
            
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <PhoneIcon width="30px" height="30px"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW</div>
                    <div className={styles.text}>+256 75 7358 914</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/NTUMMA_APP-05.png" width="200px" height="200px" alt=""/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <ShoppingCartIcon width="30px" height="30px"/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default Navbar;