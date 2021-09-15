import React,{useState , useEffect} from 'react'
import Layout from '../components/layout'
import styles from '../styles/Event.module.css'
import { Row,Col,Container } from 'react-bootstrap';
import Upcoming from '../components/EventPage/Upcoming';
import Past from '../components/EventPage/Past';
import Hero from '../components/common/Hero';
import Counter from '../components/events/Counter';


const event = (props) => {

    const [isCount , setIsCount] = useState(false);
    const [data , setData] = useState([]);
    const [upcoming , setUpcoming] = useState([]);

    useEffect(()=>{

        if(props.data && data.length == 0){
            let d = [] , u = [];
            props.data.sort((a,b) => Number(b.sort) - Number(a.sort))
            props.data.forEach(el => {
                if(el.upcoming){
                    u.push(el)
                }else{
                    d.push(el)
                }
            });
            setData(d);
            // console.log(d , "fk0" , u);
            setUpcoming(u);
        }
        
    } , [props])


    return (
        <div>
            <Layout title={"Event | MicroBird"}>
                

                <Hero title="Event" img="images/events/events-head.jpeg" desc = "An institution is always known by it's work"/>

                <div className={styles.content}>
                    <p className="m-0">
                        An institution is always known by it's work. Whatever they do, good or bad adds to their name. We often live without knowing the actual purpose of our names, but once an individual knows the actual purpose, the goals become more clear and achievable.
                    </p>
                </div>

                <div className={styles.timer}>
                    <Container className={styles.timerContainer}>
                
                        <Row className="d-flex justify-content-between">
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"Succesfully conducted Events"} time={130} isCount={isCount}/>
                            </Col>
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"Prizes won in other college Events"} time={40} isCount={isCount}/>
                            </Col>
                            <Col className={styles.timerComponent} xs={4}>
                                <Counter text={"students got involved in our Events"} time={1200} isCount={isCount}/>
                            </Col>
                            
                            
                            
                        </Row>
                    </Container>
                </div>
               
                {upcoming.length != 0 && 
                <div className={styles.upcoming}>
                    <Container className={styles.upcomingContainer} fluid>
                        <h2>Upcoming Events</h2>
                        <Row className="d-flex justify-content-center">
                            {upcoming.map((el,idx) => {
                                return (
                                    <Col className={styles.upcomingComponent} md={6}>
                                        
                                            <Upcoming data={el}/>
                                        
                                    </Col>
                                )
                            })}
                            
                            
                            
                        </Row>
                    </Container>
                </div>
                }
                {/* ====== Past Events ======== */}

                <div className={styles.past}>
                    <Container className={styles.pastContainer}>
                        <h2>Past Events</h2>
                        <Row className="d-flex justify-content-between" className={styles.pastRow}>
                            {data.map((data,idx) => {
                                return <Col key={idx} className={styles.pastComponent} md={4} sm={6} lg={4}>
                                            <div className="mt-5">
                                                <Past data={data}/>
                                            </div>
                                        </Col>
                            })}
                            {/* <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col>
                            <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col>
                            <Col className={styles.pastComponent} md={4} sm={6} lg={4}>
                                <div className="mt-5">
                                    <Past />
                                </div>
                            </Col> */}
                           
                            
                        </Row>
                    </Container>
                </div>
                
            </Layout>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.URL}events`)
    const data = await res.json()

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
        props: { 
            data 
        }
    }
}

export default event
