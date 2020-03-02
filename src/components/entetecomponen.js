import React from 'react'
const Entetecomponent = props => {
    return (
        <div>
            <div className="container">
                <img className="logoo" src="https://www.docplanner.com/img/sygnet.png"
                    alt="Docplanner Group logo" />
                <h1 className="mak"><center>Making the healthcare experience more human</center></h1>
            </div>
            <div className="para">{
                props.data.map(el => (
                    <p >{el}</p>))
            }</div>


        </div>

    )


}

export default Entetecomponent