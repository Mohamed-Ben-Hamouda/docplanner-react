import React from 'react'
const Photoscomponet = props => {
    return (

        <div className="nav">{props.data.map(el =>
            <div>
                <a href={el.link}>
                    <div className="aa">
                        <img className="pic1" src={el.pict} alt="" />
                        <div className="test" >
                            <p>{el.capital}</p>
                            <button className="see" type="button">{el.btnOpen}</button>
                        </div>
                    </div>
                </a>
            </div>
        )

        }
        </div>

    )
}

export default Photoscomponet
