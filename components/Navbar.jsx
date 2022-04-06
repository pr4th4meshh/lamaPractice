import React from 'react'
import styles from '/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order now</div>
          <div className={styles.text}>9933934919</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li>
        <Link href='/'><Image src='/img/logo.png' alt='' width='130' height='45' /></Link>
          <li className={styles.listItem}>Order</li>
          <li className={styles.listItem}>Socials</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src='/img/cart.png' alt='' width='40' height='38' />
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar