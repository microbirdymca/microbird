import React from "react";
import styles from "./Professor.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Professor() {
  return (
    
    <div className={styles.professor}>
              {/* </Col> */}
          <div className={styles.firstCol}>
            <img src="images/home/dineshkumar.jpg" />
            <div className={styles.dinesh}>
              <h3>Proff. Dinesh Kumar</h3>
              <h5>Vice Chancellor, JCBUST</h5>
              <p>
                The recipient of prestigious Homi J. Bhabha Memorial Award of Indian Science Congress, Prof. Dinesh Kumar is the fifth Vice Chancellor of J.C. Bose University of Science and Technology, YMCA, Faridabad. An able administrator and ardent researcher, our VC sir has always taught us to aim for the stars and has always backed up in all the works we do.
                </p>
            </div>
          </div>
              <div className={styles.horizontal}>
                <img src="images/home/paulami.jpeg" />
                <div className={styles.teacher}>
                  <h3>Poulami Jana</h3>
                  <h5>Faculty co-ordinator</h5>
                  
                </div>
              </div>
        {/* </Col> */}
          <div className={styles.horizontal}>
            {/* <img src="images/home/paulami.jpeg" /> */}
            <div className={styles.teacher}>
              <h3>Dr. Anuradha Pillai</h3>
              <h5>Depty Dean Student welfare</h5>
              
            </div>
          </div>
              <div className={styles.horizontal}>
                <img src="images/home/lakhwinder.jpeg" />
                <div className={styles.teacher}>
                  <h3>Prof. Lakhwinder Singh</h3>
                  <h5>Dean Student Welfare</h5>
                  
                </div>
              </div>
              <div className={`${styles.horizontal} mt-0`}>
                <img src="images/home/mukeshkumar.jpeg" />
                <div className={styles.teacher}>
                  <h3>Mukesh Kumar</h3>
                  <h5>Faculty co-ordinator</h5>
                  
                </div>
              </div>
              
              
    </div>
    
  );
}
export default Professor;
