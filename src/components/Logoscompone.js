import React from 'react'

const Logoscomponet = props => {
    return (

        <div className="les-icones">
            <div className="we-are">

                <p className="coucou" >
                    We are a global<br /> company<br />
                    with local cultures
                    </p>



                <div className="op">{props.data.map(el => (


                    <a href="#"><svg width="150" height="32" color={el.stylee} xmlns={el.xmlns} viewBox={el.viewBox} style={{ padding: "10px", colo: "red" }}><path d={el.logo} style={{ colo: "red" }} /></svg></a>

                )
                )
                }
                </div >
            </div>
        </div >
    )
}
export default Logoscomponet
