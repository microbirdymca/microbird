import { Button , Modal } from 'react-bootstrap'
import React , {useState} from 'react'
import styles from './Upcoming.module.css'
import ModalBody from './ModalBody'

const Upcoming = ({data : {name , poster , description , date , link , details}}) => {
    let reg = new RegExp('(?<=https://drive.google.com/file/d/)(.*)(?=/view)','g')
    let id = String(poster);
    id = id.match(reg);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className={styles.upcoming}>
            <img src={`https://drive.google.com/uc?export=view&id=${id}`} />
            <div className={styles.content}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.organize}>Coming On: {date}</div>
                <div className={styles.btns}>
                    <a href={`${link}`} target="_Blank">
                        <Button className={styles.btn} >Register</Button>
                        
                    </a>
                    <Button className={styles.btn} onClick={handleShow}>Details</Button>
                </div>
            </div>
        </div>
        <Modal show={show} className={styles.modal} dialogClassName={styles.dialogClass} contentClassName={styles.contentClass} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className={styles.modalHeading}>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalBody upcoming={true} date={date} link={link} id={id} description={description} details={details}/>
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

export default Upcoming
