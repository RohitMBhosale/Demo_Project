import styles from './card.module.css';


export default function OneCard({ cardDetail }) {

    const { image, name, role } = cardDetail;


    return (
<>
      
        <div className='container'>

            <img src={image} />
            <h3 className={styles.name}> {name} </h3>
            <p className={styles.role}> {role} </p>

        </div>

</>

    )



}