import React,{useState, useEffect} from "react";
import { FaInstagram , FaFacebook , FaYoutube,FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Link from 'next/link'

function Footer() {
  const [email , setEmail] = useState("");
  const [id , setId] = useState("");
  const [disable , setDisable] = useState(false);

  useEffect(()=>{
    const localEmail = localStorage.getItem("email");
    const localId = localStorage.getItem("id");
    if(localEmail){
      setDisable(true);
      setId(localId)
      setEmail("Thanks for Subscribing");

    }
  } , [])
  
  function handleSubmit(e){
    if(email){
      
      let data = {email}
      e.target.disable = true;
      fetch(`https://www.microbirdymca.com/api/subscribe`,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data),
      }).then(Response => Response.json()
      ).then(data => {
        // console.log(data, "najs")
        e.target.disable = false;
        if(data.error){
          throw new Error(data.error)
        }
        localStorage.setItem("email" , email);
        localStorage.setItem("id", data.msg.id)
        setId(data.msg.id)
        setDisable(true)
        setEmail("Thanks for Subscribing");
        
      })
      .catch(error => {
        // console.log(error)
        alert("Please Try Again")
      })
    }

  }
  function unSubscribe(e){


    let data = {id}
    e.target.disable = true;

      fetch(`https://www.microbirdymca.com/api/unsubscribe`,{
        method:"DELETE",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data),
      }).then(Response => Response.json()
      ).then(data => {
        // console.log(data, "najs")
        e.target.disable = false;

        if(data.error){
          throw new Error(data.error)
        }
        localStorage.removeItem("email");
        localStorage.removeItem("id")
        setDisable(false)
        setEmail("");
        setId("");
        
      })
      .catch(error => {
        // console.log(error)
        alert("Please Try Again")
      })

  }


  return (
    <div className="footer-home">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name"><img src="images/white2.png" height="50px"  width="150px" /></span>
          </div>
          <div className="media-icons">
            <a target="_Blank" href="https://www.facebook.com/microbirdymca">
              <FaFacebook />
            </a>
            <a target="_Blank" href="https://twitter.com/microbirdymca">
              <FaTwitter />
            </a>
            <a target="_Blank" href="https://instagram.com/microbirdymca">
              <FaInstagram />
            </a>
            <a target="_Blank" href="https://www.linkedin.com/company/microbirdymca">
              <SiLinkedin />
            </a>
            <a target="_Blank" href="https://www.youtube.com/channel/UC09c3SRYDy5nYg1WDZvF9Yg">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Other Links</li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/event">Event</Link>
            </li>
            {/* <li>
              <Link href="/gallery">Gallery</Link>
            </li> */}
          </ul>
          <div className={`box ymca`}>
            <img src="images/ymca.png" />

            
            <h3>
            J.C Bose University of Science 
            and Technology, YMCA
            </h3>
            
          </div>
          
          
          <div  method="post" className="box input-box" enctype="text/plain">
            <li className="link_name">Newsletter</li>
            {disable ? 
            <>
              <li>
                <input type="email" placeholder="Enter your email" value={email} disabled/>
              </li>
              <li>
                <input type="submit" value="UnSubscribe" onClick={unSubscribe} className={"disable"} />
              </li>
            </>
            
            :          
            <>
              <li>
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </li>
              <li>
              <input type="submit" onClick={handleSubmit} value="Subscribe"  /> 
              </li>
            </>
             }

<li className="link_name">Contact Us</li>
            <li>
            <a href="mailto:microbirdymca@gmail.com?
              
              &body=How can we help you today ?">
                Mail Id: microbirdymca@gmail.com
            </a>
              {/* <a href="#">Mail Id: microbirdymca@gmail.com</a> */}
            </li>
            
          
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text text-center d-flex justify-content-center">
          <span className="copyright_text">
            Copyright © 2021 <a href="#">MicroBird</a>All rights reserved
          </span>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;
