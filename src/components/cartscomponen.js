import React from 'react'

const Cartscomponent = props => {
    return (


        <div className="twozone"> {props.data.map(el => (
            // el.contry ?
            <div className={el.contry ? "zone1" : "zone2"}>
                <p className="textblancPM">{el.titel} </p>
                <p>
                    <h1 className="textblancGM">{el.text}</h1>
                </p>
                <div className="margin">
                    <img className="img1" src={el.img} />
                </div>

                {el.contry && <div className="selectandselect">
                    <select className="select" name="country" id="country">
                        <option>CHOOSE CONTRY</option>
                        {el.contry.map(e =>

                            <option value={e}>{e}</option>)
                        }
                    </select>


                </div>}
            </div>
            // <div className="zone2">
            //     <p className="textblancPM">{el.titel}</p>
            //     <p>
            //         <h1 className="textblancGM">{el.text} </h1>
            //     </p>
            //     <div className="margin">
            //         <img className="img2" src={el.img} />

            //     </div>

            // </div>





        )
        )

        }
        </div>
    )
}

export default Cartscomponent