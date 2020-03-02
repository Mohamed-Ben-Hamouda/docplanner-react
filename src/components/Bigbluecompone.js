import React from 'react'

const Bigbluecomponet = props => {
    return (
        <div className="ocean" >
            <div className="items-div">

                <p className="worl"> The world's biggest healthcare platform</p>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <p> <img src="https://www.docplanner.com/img/logo.png" /></p>

            </div>
            <div className="stat" >
                {props.data.map((el, index) =>
                    <div className={index % 2 === 0 ? "cardStat cardStatTrans" : "cardStat"} >
                        <div className="logoGM"><img src={el.logo} /> </div>
                        <div className="pom" >
                            {/* {el.titel === "Leader in 10 countries" ? "pom" : "cardStat"} */}
                            <h1 className="the-world">
                                {el.titel}
                            </h1></div>
                        <div className="we-work">{el.text} </div>
                    </div>
                )}
            </div>
        </div >
    )

}
export default Bigbluecomponet