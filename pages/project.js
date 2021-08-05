import React,{useState} from 'react'
import Layout from '../components/layout'
import styles from '../styles/Project.module.css'


import ProjectShowcase from '../components/ProjectPage/ProjectShowcase';
import Hero from '../components/common/Hero';
import { useEffect } from 'react';


const project = (props) => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        if(props.data && data.length == 0){
            props.data.sort((a,b) => Number(b.date.substring(b.date.length-4)) - Number(a.date.substring(a.date.length-4)) )
            setData(props.data);
            // console.log(data);
        }
    } , [props])
    

    return (
        <div>
            <Layout title={"project"}>
                
                <Hero img="/images/events/project-hero.png" 
                title="Projects"
                 desc="To make our motto much clearer, here is the collection of various works by the team: an important feature in structuring our identity" 
                 />
            
            <div className="project py-5">
                {
                    data.map((data , idx) => {
                        return <ProjectShowcase key={data.id} data={data} dir={idx%2==0 ? "left" : "right"}/>
                    })
                }
                    
                    {/* <ProjectShowcase dir="right" />
                    <ProjectShowcase dir='left' />
                    <ProjectShowcase dir="right" /> */}
            </div>


               



                
            </Layout>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://microbirdymca.herokuapp.com/projects`)
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

export default project
