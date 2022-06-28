import styles from "../styles/PIzzaList.module.css"; 
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>BEST PIZZA IN TOWN</div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit ipemu, constructe forte toddler el soft.
                Lorem ipsum dolor sit ipemu, constructe forte toddler el soft.Lorem ipsum dolor sit ipemu, constructe forte toddler el soft.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>

        </div>
    );
}
 
export default PizzaList;