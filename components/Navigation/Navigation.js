import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Nav,Navbar,NavDropdown , Dropdown,ButtonGroup,DropdownButton } from 'react-bootstrap';
import styles from './Navigation.module.css'
import { BsJustifyLeft,BsFillPeopleFill } from 'react-icons/bs';
import { AiFillHome,AiFillTrophy,AiFillProject } from "react-icons/ai";
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Navigation = () => {
    const router = useRouter()
    const elActive = router.pathname.substring(1);

    let home = React.createRef()
    let nav = React.createRef()
    let event = React.createRef()
    let gallery = React.createRef()
    let team = React.createRef()
    let project = React.createRef()

    useEffect(() => {
        // console.log("hello")
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
    

    useEffect(() => {
        var doc = document.documentElement;
        var w = window;

        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;

        var header = document.getElementById('nav');

        var checkScroll = function() {

            /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */
            
            

            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > 5+prevScroll) { 
            //scrolled up
            direction = 2;
            }
            else if (curScroll + 5 < prevScroll) { 
            //scrolled down
            direction = 1;
            }

            if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
            }

            prevScroll = curScroll;
        };

        var toggleHeader = function(direction, curScroll) {
            if (direction === 2 && curScroll > 100) { 

            

            header.style.top = "-103px";
            prevDirection = direction;
            }
            else if (direction === 1) {
            header.style.top = "0px";
            prevDirection = direction;
            }
        };

        window.addEventListener('scroll', checkScroll);
    }, [])


    return (
        <>
           {/* <Navbar className={styles.navbarParent}>
            <Navbar.Brand href="#home" className={styles.navbar}>
                
            </Navbar.Brand>
            
            
                <Nav className={"ml-auto"}>
                


                

                        <Dropdown 
                        drop={"left"} 
                        as={ButtonGroup}
                        
                        >
                        <Dropdown.Toggle className={styles.Dropdown} id="dropdown-basic">
                            <BsJustifyLeft className={styles.bar}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.DropdownMenu}>
                                <Link href="/" style={{color:"#fff"}}>
                            <Dropdown.Item className={styles.dropItem}>
                            <AiFillHome className={styles.icon}/>

                            <span>
                                Home
                            </span>    
                                
                            </Dropdown.Item>
                                </Link> 
                                <Link href="/event" style={{color:"#fff"}}>
                            <Dropdown.Item className={styles.dropItem}>
                            <AiFillTrophy className={styles.icon}/>

                            <span>
                                Events
                            </span>    
                                
                            </Dropdown.Item>
                                </Link> 
                            <Dropdown.Item className={styles.dropItem}>
                            <AiFillProject className={styles.icon}/>

                            <span>
                                <Link href="/project" style={{color:"#fff"}}>
                                Projects
                                </Link> 
                            </span>    
                                
                            </Dropdown.Item>
                            <Dropdown.Item className={styles.dropItem}>
                            <BsFillPeopleFill className={styles.icon}/>

                            <span>
                                <Link href="/team" style={{color:"#fff"}}>
                                Team
                                </Link> 
                            </span>    
                                
                            </Dropdown.Item>
                            
                        </Dropdown.Menu>
                        </Dropdown> */}

                    


                {/* </Nav>
                
            </Navbar>  */}

            <nav ref={nav} className={`${styles["navbar"]}`} id="nav">
                    <Link href="/" >
                        <img alt="MicroBird Logo"
                            src="images/white2.png"
                            width={150}
                            height={50}
                            className={`${styles["image"]}`}
                        /> 
                    </Link>
                <ul className={`${styles["navbar-links"]}`}>
                    <li className={`${styles["navbar-dropdown"]}`}>
                    <BsJustifyLeft className={styles.bar}/> 
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
