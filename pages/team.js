import React , {useState , useEffect , useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hero from '../components/common/Hero'
import Layout from '../components/layout'
import Member from '../components/TeamPage/Member'
import SecCard from '../components/TeamPage/SecCard'

import styles from '../styles/Team.module.css'

const Team = (props) => {

    const [sec , setSec] = useState([]);
    const [jsec , setJsec] = useState([]);
    const [member , setMember] = useState([]);
    useEffect(()=>{
        console.log(props)
        if(props.data != 0){
            props.data.sort((a,b) => Number(b.year.substring(0,1)) - Number(a.year.substring(0,1)) )
            let seci = [];
            let jseci = [];
            let memberi = [];
            props.data.forEach((data) => {
                if(!data.position){
                    memberi.push(data)
                }else if(data.position == 'sec'){
                    seci.push(data)
                }else{
                    jseci.push(data);
                }
            })
            setSec(seci);
            setJsec(jseci);
            setMember(memberi);
            
        }
    } , [props])




    return (
        <Layout title="Team" >
            
        <div className={styles.team}>
        <div className={styles.hero}>
            <Hero blur={3} title="Our Team" img="/images/team/team-hero.jpeg" desc = "The unit that provides the strength to make it what it is."/>
           
        </div>
        <div className={styles.container}>
            <h1 className="text-center display-4 py-2 mb-4" style={{fontWeight:"700"}}>Secretaries</h1>
            <Row className="d-flex justify-content-center px-4" >
                {sec.length !=0 && sec.map((data,idx) => {
                    return <Col key={idx} className={styles.secCardCol} md={3}>
                                <SecCard name={data.name} tagline={data.tagline} photo={data.photo} linkedin={data.linkedin} insta={data.insta} facebook={data.facebook} />
                            </Col> 
                })}
                                        
                                    
            </Row>
        </div>
        <section className={styles.jsec}> 
        <div className="row text-center justify-content-center hidden mb-4">
        {/* <div className="col-8"> */}
        <h1 className="text-center display-4 py-2" style={{fontWeight:"700"}}>Joint Secretaries</h1>
        {/* </div> */}
        </div>
            <div className={styles.container}>
            
                <Row className="d-flex justify-content-between px-4">

                    {jsec.length !=0 && jsec.map((data,idx) => {
                    return <Col key={idx} className={styles.secCardCol} md={3}>
                                <SecCard name={data.name} tagline={data.tagline} photo={data.photo} linkedin={data.linkedin} insta={data.insta} facebook={data.facebook} />
                            </Col> 
                    })}                        
                                            
                        
                                
                </Row>
            </div>
        </section>
        <section className="fdb-block team-1 " style={{padding: "2em 0px"}}>

    <Container fluid>
        <Row>
            <Col xs={12}>
                <h1 className="text-center display-4 py-2" style={{fontWeight:"700"}}>Our Team</h1>
                <p className="leadv mb-4 text-center" style={{fontSize:"1.5rem"}}>Members</p>
            </Col>
            <Col xs={12}>
                <Container fluid >
                
                    <Row>
                        {/* <ListTeam member={member} /> */}
                    {
                    member.length !=0 && member.map((data,idx) => {
                                return <Col key={idx} md={2} sm={6} className={styles.memCardCol}>
                                            <Member name={data.name} tagline={data.tagline} linkedin={data.linkedin} insta={data.insta} facebook={data.facebook} photo={data.photo} year={data.year} />
                                        </Col> 
                                
                    })
                    }
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>

</section>
        </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://microbirdymca.herokuapp.com/teams`)
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


export default Team
