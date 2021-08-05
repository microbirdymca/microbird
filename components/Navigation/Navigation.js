import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Nav,Navbar,NavDropdown , Dropdown,ButtonGroup,DropdownButton } from 'react-bootstrap';
import styles from './Navigation.module.css'
import { BsJustifyLeft,BsFillPeopleFill } from 'react-icons/bs';
import { AiFillHome,AiFillTrophy,AiFillProject } from "react-icons/ai";

const Navigation = () => {
    return (
        <>
           <Navbar className={styles.navbarParent}>
            <Navbar.Brand href="#home" className={styles.navbar}>
                <img alt="MicroBird Logo"
                    src="images/white2.png"
                    width={150}
                    height={50}
                    className={styles.image}
                />
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
                            <Dropdown.Item className={styles.dropItem}>
                            <AiFillHome className={styles.icon}/>

                            <span>
                                <Link href="/" style={{color:"#fff"}}>
                                Home
                                </Link> 
                            </span>    
                                
                            </Dropdown.Item>
                            <Dropdown.Item className={styles.dropItem}>
                            <AiFillTrophy className={styles.icon}/>

                            <span>
                                <Link href="/event" style={{color:"#fff"}}>
                                Events
                                </Link> 
                            </span>    
                                
                            </Dropdown.Item>
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
                        </Dropdown>

                    {/* <div className="mt-2">
                        <DropdownButton
                        menuAlign={{ lg: 'left' }}
                        title={<BsJustifyLeft />}
                        id="dropdown-menu-align-responsive-2"
                        className={styles.Dropdown}
                        >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                        </DropdownButton>
                    </div> */}


                </Nav>
                
            </Navbar> 
        </>
    )
}

export default Navigation
