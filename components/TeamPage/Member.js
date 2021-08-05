import React from 'react'
import styles from './Member.module.css'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const JSecCard = ({photo , name , tagline, year , linkedin , facebook , insta}) => {
    let id = String(photo);
    id = id.split("=")[1];

    return (
        <>
           
    
            <div className={styles.card_wrapper}>
            
            <div className={styles.card}>
                
                <div className={styles.card_image}>
                <img src={`https://drive.google.com/uc?export=view&id=${id}`} alt="images" />
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
                <h2>{name} | {year} yr
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
