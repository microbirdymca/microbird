import React from "react";
import styles from "./Feature.module.css";
import { AiFillSetting , AiTwotoneHome  } from "react-icons/ai";
import { GoRadioTower } from "react-icons/go";

function Feature() {
  return (
    <div className={styles.feature}>
      <div className={styles.card}>
        
        <div className={styles.svg}>
          <AiFillSetting />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lom Ipsum has
          Lorem Ipsu
        </p>
      </div>
      <div className={styles.card}>
        
        <div className={styles.svg}>
          <AiTwotoneHome />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lom Ipsum has
          Lorem Ipsu
        </p>
      </div>
      <div className={styles.card}>
        
        <div className={styles.svg}>
          <GoRadioTower />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lom Ipsum has
          Lorem Ipsu
        </p>
      </div>
    </div>
  );
}
export default Feature;
