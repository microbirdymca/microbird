import React from 'react'
import { Row,Col,Container } from 'react-bootstrap';
import styles from './ModalBody.module.css'

const ModalBody = ({ description , date , id , youtube}) => {
    console.log(youtube)
    let youtubeID;
    if(youtube){
    youtube = String(youtube);
    youtube = youtube.split("/");
    youtubeID = youtube[youtube.length-1];}
    return (
        <>
            <Container className={styles.upcomingContainer}>
                        
                        <Row className="d-flex justify-content-between">
                            <Col className={styles.modalComponent} md={6} sm={12}>
                                <img  src={`https://drive.google.com/uc?export=view&id=${id}`} className={styles.image} />
                                <div className={styles.caption}>
                                    <h3 className="text-center">Scheduled On: {date}</h3>
                                    
                                </div>
                            </Col>
                            <Col className={styles.modalComponent} md={6} sm={12}>
                            <p>
                            {description}
                                </p>
                                {youtube &&  
                                    <iframe width="100%" height="315"
                                    src={`https://www.youtube.com/embed/${youtubeID}`}>
                                    </iframe>
                                }   
                            </Col>
                            
                        </Row>
            </Container>
        </>
    )
}

export default ModalBody
