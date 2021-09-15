import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Nav,Navbar,NavDropdown , Dropdown,ButtonGroup,DropdownButton } from 'react-bootstrap';
import styles from './Navigation.module.css'
import { BsJustifyLeft,BsFillPeopleFill } from 'react-icons/bs';
import { AiFillHome,AiFillTrophy,AiFillProject } from "react-icons/ai";
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Navigation = ({color}) => {
    const router = useRouter()
    const elActive = router.pathname.substring(1);

    let home = React.createRef()
    let nav = React.createRef()
    let event = React.createRef()
    let gallery = React.createRef()
    let team = React.createRef()
    let project = React.createRef()

    useEffect(() => {
        console.log("hello")
        switch(elActive){
            case "team": 
                team.current.style.opacity=1;
            break;
            case "event": 
                event.current.style.opacity=1;
            break;
            case "project": 
                project.current.style.opacity=1;
            break;
            case "gallery": 
                gallery.current.style.opacity=1;
            break;
            default:
                home.current.style.opacity=1;
        }
    }, [elActive])
    


    return (
        <>
           
            <nav ref={nav} className={`${styles["navbarWithoutMB"]}`} id="nav">
                    
                <ul className={`${styles["navbar-links"]}`}>
                    <li className={`${styles["navbar-dropdown"]}`}>
                    <BsJustifyLeft className={styles.barWithoutMB} style={{color:color}}/> 
                    <div className={`${styles["dropdown"]}`}>
                        <Link href="/">
                            <span className={styles.links} ref={home}>
                                <AiFillHome className={styles.icon}/> Home
                            </span>
                        </Link>
                        <Link href="/event">
                            <span className={styles.links} ref={event}>
                                <AiFillTrophy className={styles.icon}/> Event
                            </span>
                        </Link>
                        {/* <Link href="/gallery">
                            <span className={styles.links} ref={gallery}>
                                <AiFillHome className={styles.icon}/> Gallery
                            </span>
                        </Link> */}
                        <Link href="/team">
                            <span className={styles.links} ref={team}>
                                <BsFillPeopleFill className={styles.icon}/> Team
                            </span>
                        </Link>
                        <Link href="/project">
                            <span className={styles.links} ref={project}>
                                <AiFillProject className={styles.icon}/> Project
                            </span>
                        </Link>
                    </div>
                    </li>
                    
                </ul>
                </nav>



        </>
    )
}

export default Navigation
