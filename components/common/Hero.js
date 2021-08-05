import React from 'react'
import { Parallax ,Background } from 'react-parallax';
import styles from './Common.module.css'

const Hero = ({ img , desc , title, blur }) => {
    // console.log(blur)
    return (
        <>
            <Parallax 
                blur={blur === 0 ? blur : 3} 
                bgImage={img}
                bgImageAlt="the cat" 
                strength={300}
                bgImageStyle={{height: '120%' , width:"100%"}}
                className={styles.hero}
                >
                    <div className={`text-center ${styles.content}`}>

                        <h1 className="display-1" style={{fontWeight:'600'}}>{title}</h1>
                        {desc && <p className={`mx-auto mt-4 ${styles.desc}`} >{desc}</p>}
                    </div>
           </Parallax>
        </>
    )
}

export default Hero
