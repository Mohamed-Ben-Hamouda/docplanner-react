import React from 'react'
const Navbarcomponent = props => {
    return (
        <div className="posfix container">
            <ul className="navbarcss">

                <img className="logodocgroup" src={props.data[0].link}
                    alt="Docplanner Group" />
                <div className="menu-items">

                    {props.data.map(el => (
                        el.SubMenue ?
                            <div>
                                <a className="ref" href={el.link}>{el.titel}
                                    <div className="dropdown">
                                        {el.SubMenue.map(e =>
                                            <li>
                                                <a href="/#">{e}</a>
                                            </li>
                                        )}
                                    </div>

                                </a>
                            </div>
                            : <a href={el.link}>{el.titel}</a>

                    ))}
                </div>

            </ul>
        </div>
    )
}
export default Navbarcomponent
