import { Button } from 'react-bootstrap'
import React from 'react'
import styles from './Upcoming.module.css'

const Upcoming = ({data : {name , poster , description , date}}) => {
    let reg = new RegExp('(?<=https://drive.google.com/file/d/)(.*)(?=/view)','g')
    let id = String(poster);
    id = id.match(reg);
    console.log(id)
    
    return (
        <div className={styles.upcoming}>
            <img src={`https://drive.google.com/uc?export=view&id=${id}`} />
            <div className={styles.content}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.organize}>Coming On: {date}</div>
                <div className={styles.btns}>
                    <Button className={styles.btn} >Register</Button>
                    <Button className={styles.btn}>Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
