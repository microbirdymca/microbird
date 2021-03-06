import React , {useState , useEffect} from "react";
import styles from "./Alumni.module.css";
import { Carousel } from "react-bootstrap";
import { GrLinkNext , GrLinkPrevious } from "react-icons/gr";


function Alumni(props) {
  const [index, setIndex] = React.useState(0);
  // console.log(props);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const [data , setData] = useState([]);
    useEffect(()=>{
        if(props.data && data.length == 0){
            props.data.sort((a,b) => Number(b.batch.substring(4)) - Number(a.batch.substring(4)) )
            setData(props.data);
            
        }
    } , [props])

  return (
    <div className={styles.alumni}>
      <h1 className="py-3">Our Alumni</h1>

    <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}
      nextIcon={<span aria-hidden="true" className={styles.carousel_control_next_icon} >
        <GrLinkNext className={styles.control} />

      </span>	
    }
      prevIcon={<span aria-hidden="true" className={styles.carousel_control_next_icon} >
        <GrLinkPrevious className={styles.control} />

      </span>	
    }
    // fade={true}
    >
      {data.map((data , idx) => {
        let id = String(data.picture).split("=")[1];
        
        return (
          <Carousel.Item className={styles.slide} key={idx}>
            <div className={styles.caption}>
            <img
              src={`https://drive.google.com/uc?export=view&id=${id}`}
              alt="First slide"
            />
              <h3>{data.name}</h3>
              <h5>{data.branch} | {data.batch}</h5>
              <span className={styles.company}>{data.position}</span>
              <p>
                {data.journey}
                </p>
            </div>
          </Carousel.Item>
        )
      })}
      
      
      
    </Carousel>
    </div>
  );
}



export default Alumni;
