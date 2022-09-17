import React from "react";
import styles from "./Professor.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Professor() {
  return (
    
    <div className={styles.professor}>
              {/* </Col> */}
          <div className={styles.firstCol}>
            <img src="images/home/sktomar.jpg" />
            <div className={styles.sktomar}>
              <h3>Prof. S.K. Tomar</h3>
              <h5>Vice Chancellor, JCBUST</h5>
              <p>
                Prof. Sushil Kumar Tomar is a distinguished academician, researcher and educational administrator. Prof. Tomar, who is also a well known Mathematician, assumed the office of Vice-Chancellor on February 22, 2022 as the seventh Vice-Chancellor of the University.
                The career of Prof. Tomar as an academician and researcher spans over 34 years. He brings with him a rich mixture of professional expertise and administrative experience.
              </p>
            </div>
          </div>
              <div className={`${styles.horizontal} ${styles.paulami}`}>
                <img src="images/home/paulami.jpeg" />
                <div className={styles.teacher}>
                  <h3>Poulami Jana</h3>
                  <h5>Faculty co-ordinator</h5>
                  
                </div>
              </div>
        {/* </Col> */}
          <div className={`${styles.horizontal} ${styles.anuradha}`}>
            <img src="images/home/anuradha.jpeg" />
            <div className={styles.teacher}>
              <h3>Dr. Anuradha Pillai</h3>
              <h5>Deputy Dean Student welfare</h5>
              
            </div>
          </div>
              <div className={`${styles.horizontal} ${styles.lakhwinder}`}>
                <img src="images/home/lakhwinder.jpeg" />
                <div className={styles.teacher}>
                  <h3>Prof. Lakhwinder Singh</h3>
                  <h5>Dean Student Welfare</h5>
                  
                </div>
              </div>
              <div className={`${styles.horizontal} ${styles.mukesh} mt-0`}>
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
