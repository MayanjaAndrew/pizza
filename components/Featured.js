import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex]= useState(0);
    const images=[
        "/images/image-1.jpeg",
        "/images/Autoclave_sterilizers.jpg",
        "/images/containers.jpg",
    ]

    const handleArrow=(direction)=>{
        if(direction==="l"){
            setIndex(index!==0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index!==2 ? index+1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <ArrowCircleLeftIcon layout="fill"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img,i)=>
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain"/>
                    </div>
                    )} 
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
                <ArrowCircleRightIcon layout="fill"/>
            </div>
        </div>
            
    );
}
 
export default Featured;