import React from 'react'
import styles from './ProjectShowcase.module.css'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { AiFillCalendar ,AiOutlineStar } from "react-icons/ai";

const ProjectShowcase = ({dir, data}) => {
    let {poster} = data;
    let reg = new RegExp('(?<=https://drive.google.com/file/d/)(.*)(?=/view)','g')
    let id = String(poster);
    id = id.match(reg);
    // console.log(reg , str)
    return (
        <>
           
        <div className={`${styles.containerFluid}`}>
        <div className={`${styles.blogCard} row`}>
           {dir === "left" &&  <div className={`${styles.media} col-sm-5 `} style={{backgroundImage: `url("https://drive.google.com/uc?export=view&id=${id}")`}}></div>}
            <div className={`${styles.cardBody} col-sm-7 col-xs-7`}>
            {/* <p className={`${styles.tagline} text-center`}>Featured</p> */}
            <h3 className={`${styles.title} text-center mt-3`}>{data.name}</h3>
            <div className={styles.dates}>
                <p>
                <TiLocation  className={styles.cardIcons} />Showcased at: ELements Culmyca {data.date.substring(data.date.length-4)}
                </p>
                <p>
                <AiFillCalendar className={styles.cardIcons}  />Showcased on: {data.date}
                </p>
                
            </div>
            <div className={styles.divider}></div>
            <div className={styles.content}>
                <p className={styles.subPara}>
                <AiOutlineStar style={{marginRight:'10px' , fontSize:'20px'}} />{data.star}
                </p>
                <p className={`${styles.paragraph} text-justify px-2`}>
                    {data.description}
                </p>
            </div>
            <div className={styles.account}>
                <FaInstagram className={styles.icons} />
                <FaFacebook className={styles.icons} />
                <SiLinkedin className={styles.icons} />
            </div>
            {/* <a class="read-more glyphicon glyphicon-chevron-down"></a> */}
            </div>
            {dir === "right" &&  <div className={`${styles.media} col-sm-5 `} style={{backgroundImage: `url("https://drive.google.com/uc?export=view&id=${id}")`}}></div>}
        </div>
        </div>
            
        </>
    )
}

export default ProjectShowcase
