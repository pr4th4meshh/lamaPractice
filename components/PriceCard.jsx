import React from "react";
import styles from "/styles/PriceCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PriceCard = () => {
  return (
    <Link href="/product/[id].jsx">
      <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" height="500" width="500" />
        <h1 className={styles.title}>Golden corn</h1>
        <span className={styles.price}>$21.50</span>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet molestias.</p>
      </div>
    </Link>
  );
};

export default PriceCard;
