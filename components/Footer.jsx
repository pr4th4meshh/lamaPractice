import React from "react";
import styles from "/styles/Footer.module.css";
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src="/img/bg.png" objectFit="cover" alt="" layout="fill" />
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h3 className={styles.motto}>YES! YOU HAVE MADE IT TO LAMA PIZZA. MAKE SURE YOU VISIT OUR RESTAURANTS AS WELL.</h3>
          </div>
          <div className={styles.card}> 
            <h1 className={styles.title}>Find our restaurants</h1>
            <p className={styles.text}>
              1674 Doom Road.
              <br />
              NewYork 57
              <br /> Maharashtra , Ind
            </p>

            <p className={styles.text}>
              1674 Doom Road.
              <br />
              NewYork 57
              <br /> Maharashtra , Ind
            </p>

            <p className={styles.text}>
              1674 Doom Road.
              <br />
              NewYork 57
              <br /> Maharashtra , Ind
            </p>

            <p className={styles.text}>
              1674 Doom Road.
              <br />
              NewYork 57
              <br /> Maharashtra , Ind
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Working Hours</h1>
            <p className={styles.text}>
              Monday to Friday
              <br />
              9:00 - 22:00
            </p>

            <p className={styles.text}>
              Monday to Friday
              <br />
              9:00 - 22:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
