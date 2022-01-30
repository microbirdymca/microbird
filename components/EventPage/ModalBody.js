import React from 'react'
import { Row,Col,Container, Button } from 'react-bootstrap';
import styles from './ModalBody.module.css'
import MarkdownView from 'react-showdown';


const ModalBody = ({ description , date , id , youtube , upcoming , link , details}) => {
    console.log(youtube)
    let youtubeID;
    if(youtube){
    youtube = String(youtube);
    youtube = youtube.split("/");
    youtubeID = youtube[youtube.length-1];}

    const Description = (description) => {
        return  <MarkdownView
                    markdown={description}
                    options={{ tables: true, emoji: true }}
                />
    }
    return (
        <>
            <Container className={styles.upcomingContainer}>
                        
                        <Row className="d-flex justify-content-between">
                            <Col className={styles.modalComponent} md={6} sm={12}>
                                <div className={styles.left}>
                                <img  src={`https://drive.google.com/uc?export=view&id=${id}`} className={styles.image} />
                                    <h3>Scheduled On: {date}</h3>
                                    
                                </div>
                            </Col>
                            <Col className={styles.modalComponent} md={6} sm={12}>
                            <p className={styles.description}>
                            {upcoming ? Description(details) : Description(description)}
                                </p>
                                {youtube &&
                                    <iframe width="100%" height="315"
                                    src={`https://www.youtube.com/embed/${youtubeID}`}>
                                    </iframe>
                                }{
                                    upcoming&&
                                    <a href={`${link}`} target="_Blank" className={styles.registerBtn}>
                                        <Button className={styles.btn} >Register</Button>
                                    </a>
                                }   
                            </Col>
                            
                        </Row>
            </Container>
        </>
    )
}

export default ModalBody
