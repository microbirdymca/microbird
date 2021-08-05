import React from "react";
import styles from "./Professor.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Professor() {
  return (
    
    <Container fluid className={styles.professor}>
      <Row className={styles.row}>
        <Col md={6}>
          <div className={styles.firstCol}>
          <img src="images/home/dineshkumar.jpg" />
          <div className={styles.dinesh}>
            <h3>Proff. Dinesh Kumar</h3>
            <h5>Vice chancillor, JCBUST</h5>
            <p>
              The recipient of prestigious Homi J. Bhabha Memorial Award of Indian Science Congress, Prof. Dinesh Kumar is the fifth Vice Chancellor of J.C. Bose University of Science and Technology, YMCA, Faridabad. An able administrator and ardent researcher, our VC sir has always taught us to aim for the stars and has always backed up in all the works we do.
               </p>
          </div>
          </div>
        </Col>
        <Col md={6}>
          <Container fluid>
            <Row>
              <Col xs={12} style={{textAlign:'left'}}>
              <div className={styles.horizontal}>
                <img src="images/home/mukeshkumar.jpeg" />
                <div className={styles.teacher}>
                  <h3>Mukesh Kumar</h3>
                  <h5>Faculty co-ordinator</h5>
                  
                </div>
              </div>
              </Col>
              <Col xs={12}>
              <div className={styles.horizontal}>
                <img src="images/home/paulami.jpeg" />
                <div className={styles.teacher}>
                  <h3>Paulami Jain</h3>
                  <h5>Faculty co-ordinator</h5>
                  
                </div>
              </div>
              </Col>
              
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    
  );
}
export default Professor;
