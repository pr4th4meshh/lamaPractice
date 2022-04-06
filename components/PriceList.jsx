import styles from '/styles/PriceList.module.css'
import PriceCard from './PriceCard'

const PriceList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best Fizza in town</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio.</p>
        <div className={styles.wrapper}>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
           <PriceCard/>
        </div>
    </div>
  )
}

export default PriceList