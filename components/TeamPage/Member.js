import React from 'react'
import styles from './Member.module.css'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image'

const JSecCard = ({photo , name , tagline, year , linkedin , facebook , insta}) => {
    let id = String(photo);
    id = id.split("=")[1];
    let YEAR = new Date().getFullYear();
    function batch(year){
        YEAR = parseInt(YEAR, 10);
        let ans = +YEAR-Number(year.substring(0,1));
        
        return (
            <>
                {ans}-{ans+4}
            </>
        )
    }
    return (
        <>
           
    
            <div className={styles.card_wrapper}>
            
            <div className={styles.card}>
                
                <div className={styles.card_image}>
                    <img src={`https://drive.google.com/uc?export=view&id=${id}`} alt="images"  />
                </div>

            <ul className={styles.social_icons}>
                {insta && 

                    <li>
                    <a href={insta} target="_Blank">
                        <FaInstagram />
                    </a>
                    </li>
                }
                {facebook &&    
                    <li>
                    <a href={facebook} target="_Blank">
                        <FaFacebook />
                        {/* <i className={styles.fab fa_instagram"></}> */}
                    </a>
                    </li>
                }
                {linkedin && 
                    <li>
                    <a href={linkedin} target="_Blank">
                        <SiLinkedin />
                        {/* <i className={styles.fab fa_twitter"></}> */}
                    </a>
                    </li>
                }
                
            </ul>

            <div className={styles.details}>
                <h2>{name} | {batch(year)}
                {/* <br /> */}
                <span className={styles.job_title}>{tagline}</span>
                </h2>
            </div>
            </div>
        </div>
    
    

     

        </>
    )
}

export default JSecCard
