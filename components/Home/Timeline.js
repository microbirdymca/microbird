import React from "react";
import styles from "./Timeline.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TimelineCard from "./TimelineCard";

function Timeline() {

  const settings = {
    dots: true,
    className: `center ${styles.slider}`,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    dotsClass :`slick-dots ${styles.dots} `,
    swipeToSlide: true,
    // pauseOnFocus:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className={styles.timeline}>
      <div className={styles.title}>
        <h4>Development of the club in the past years!</h4>
        <h2>Our Timeline !</h2>
      </div>
      
        
        <Slider className={styles.slider} {...settings}>
          <div>
            <TimelineCard year={2010} text={"MICROBIRD was established as a technical society of YMCA."} />
          </div>
          <div> 
            <TimelineCard year={2012} text={"Organised embedded system and mobile robotics workshop for the first time."} />
          </div>
          <div>
            <TimelineCard year={2013} text={"Started Ecotronics- a green electronics event aiming to promote the use of advanced technologies to help our environment."} />
          </div>
          <div>
            <TimelineCard year={2014} text={"To teams got selected in e-yantra which later bacame a trend for the University.Also, actively contributed in the Science Conclave. "} />
          </div>
          <div>
            <TimelineCard year={2015} text={"Organised an event with IIT Kanpur as a zonal center.Started ESCALADE with IIT Guwahati."} />
          </div>
          <div>
            <TimelineCard year={2016} text={"The first time we presented something on the main stage.Iridescent aka the Light show"} />
          </div>
          <div>
            <TimelineCard year={2017} text={"started presenting fun interactive events and gaming competition too."}/>
          </div>
          <div>
            <TimelineCard year={2018} text={"Presented  trone dance on stage in which everything was made from scratch and we used our own Technology which was cost effective too."}/>
          </div>
          <div>
            <TimelineCard year={2019} text={"We stared MICROWORLD which is our own arena of some attractive events."}/>
          </div>
          <div>
            <TimelineCard year={2020} text={"We expanded our horizons and made our events public, accessable to all students accross the country."}/>
          </div>
          
          
        </Slider>   
                   
    </div>
    
    </>
  );
}
export default Timeline;
