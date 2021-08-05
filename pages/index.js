import Card from "../components/Home/Card";
import Feature from "../components/Home/Feature";
import Timeline from "../components/Home/Timeline";
import Alumni from "../components/Home/Alumni";
import Professor from "../components/Home/Professor";
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Hero from "../components/common/Hero";
import Particles from 'react-particles-js';

export default function Home(props) {
  
  return (
    <Layout title="Home | MicroBird">
      {/* <Hero img="/images/events/project-hero.png" 
        title="Home"
        desc="Lorem Ipsum is simply dummy text of the printing and  Lor    and typesetting industry. Lorem Ipsum has Lorem Ipsum   and simply dummy . Lorem Ipsum has Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and  Lor    and typesetting indust . Lorem Ipsum has Lorem Ipsum is " 
      /> */}
       <div className={styles.hero}>
       <Particles
    params={{
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700 } },
    
    
        "color": {
          "value": "#ffffff" },
    
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000" },
    
          "polygon": {
            "nb_sides": 5 } },
    
    
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 0.1,
            "opacity_min": 0.1,
            "sync": false } },
    
    
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false } },
    
    
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1 },
    
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200 } } },
    
    
    
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab" },
    
          "onclick": {
            "enable": true,
            "mode": "push" },
    
          "resize": true },
    
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1 } },
    
    
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3 },
    
          "repulse": {
            "distance": 200,
            "duration": 0.4 },
    
          "push": {
            "particles_nb": 4 },
    
          "remove": {
            "particles_nb": 2 } } },
    
    
    
      "retina_detect": true }
      }
      className={styles.particle}
      canvasClassName={styles.canvas}
      />
      <img alt="microbird" className={styles.logo} src="images/white2.png" />
       </div>
      <div className={styles.home} style={{marginTop : "2rem"}}>
        <Card />
        <Timeline />
        <Professor />
        <Alumni data={props.data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://microbirdymca.herokuapp.com/alumni`)
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
