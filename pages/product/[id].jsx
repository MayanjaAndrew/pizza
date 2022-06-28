import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Product.module.css";

const Product = () => {
    const pizza={
        id:1,
        img:"/images/NTUMMA_APP-05.png",
        name:"CAMPAGNOLA",
        price:[19.9,23.9,27.9],
        desc:"Lorem ipsum dolor sit amet, consectur adipising  elit."

    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} alt="" objectFit="contain" layout="fill"/>
            </div>
        </div>
    </div>
  )
}

export default Product