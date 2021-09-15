import React from 'react'
import styles from './SecCard.module.css'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image'


const SecCard = ({photo , tagline , name , insta , facebook , linkedin}) => {
    let id = String(photo);
    id = id.split("=")[1];
    // https://drive.google.com/open?id=15NyRFRHfwESkCQ3wpGb4S15N2r19IP2K
    // console.log(id , " : id")
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <div className={styles.overlay}>
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
                                </a>
                                </li>
                            }
                            {linkedin && 
                                <li>
                                <a href={linkedin} target="_Blank">
                                    <SiLinkedin />
                                </a>
                                </li>
                            }
                            
                        </ul>
                    </div>
                    <img src={`https://drive.google.com/uc?export=view&id=${id}`} alt="images" />
                </div>
                <div className={styles.details}>
                    <h2>{name}<br /><span>{tagline}</span></h2>
                </div>
            </div>   
        </>
    )
}

export default SecCard
