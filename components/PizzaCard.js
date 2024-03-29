import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";
const PizzaCard = () => {
    return ( 
            <div className={styles.container}>
                <Image src="/images/NTUMMA_APP-05.png" alt="" width="500" height="500"/>
                <h1 className={styles.title}>
                    FIORI DI ZUCCA
                </h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
            </div> 
            );
}
 
export default PizzaCard;