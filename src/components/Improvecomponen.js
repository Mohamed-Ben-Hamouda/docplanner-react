import React from 'react'
const Improvecomponent = props => {
    return (

        <div>
            {props.data.map(el =>

                <div class="mariam">
                    <p class="mariam">{el.titel}</p>
                    <p class="chahd">{el.text}</p>
                </div>
            )}

        </div>

    )
}

export default Improvecomponent