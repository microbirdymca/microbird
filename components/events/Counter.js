import React from 'react'
import CountUp from 'react-countup';

const Counter = (props) => {




    return (
        <div>
            <CountUp
                start={0}
                end={props.time}
                duration={3}
                startOnMount={false}
                suffix={"+"}
                delay={0}
                >
                {({ countUpRef, start }) => (
                    <div>
                    <span style={{color: '#042b50'}} ref={countUpRef} />
                    <p>{props.text}</p>
                    </div>
                )}
                </CountUp>
                {/* <CountUp end={123457} /> */}

        </div>
    )
}

export default Counter