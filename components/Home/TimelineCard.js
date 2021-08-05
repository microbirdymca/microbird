import React from "react";
import styles from "./Timeline.module.css";

function TimelineCard({year , text}) {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.card}>
        <div className={styles.year}>
            <span>{year||2015}</span>
        </div>
        
        
        <p>
          {text}
        </p>
      </div>
      
    </div>
  );
}
export default TimelineCard;