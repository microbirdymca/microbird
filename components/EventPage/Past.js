import { Button , Card,Modal } from 'react-bootstrap'
import React,{useState} from 'react'
import styles from './Past.module.css'
import ModalBody from './ModalBody'

const Past = (data) => {
    const [show, setShow] = useState(false);
    const {name , description , short , youtube, date , poster} = data.data;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let reg = new RegExp('(?<=https://drive.google.com/file/d/)(.*)(?=/view)','g')
    let id = String(poster);
    id = id.match(reg);
    return (
        <>
        {/* <div className={styles.past}>
            <Card className={styles.card} >
            <Card.Img className={styles.cardImg} variant="top" src="/images/events/past.png" />
            <Card.Body >
                <div className={styles.cardBody}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>

                </div>
                <Button className={styles.viewBtn} variant="primary" onClick={handleShow}>View more</Button>
                <span className={styles.date}>July 20 </span>
            </Card.Body>
            
            
            </Card>
        </div> */}

            {/* Custom Card */}
            <div className={styles.center}>
                <div className={styles.property_card}>
                    <span>
                    <div className={styles.property_image} style={{backgroundImage: `url("https://drive.google.com/uc?export=view&id=${id}")`}}>
                        <div className={styles.property_image_title}>
                       
                        </div>
                    </div>
                    </span>
                    <div className={styles.property_description}>
                    <h5> {name} </h5>
                    <p>{short}</p>
                    <div className={styles.property_social_icons}>
                        <Button className={styles.viewBtn} variant="primary" onClick={handleShow}>View More </Button>
                        <span>{date}</span>
                    </div>
                    </div>
                    
                    
                </div>
                </div>


        <Modal show={show} className={styles.modal} dialogClassName={styles.dialogClass} contentClassName={styles.contentClass} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className={styles.modalHeading}>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalBody date={date} id={id} youtube={youtube} description={description}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Past