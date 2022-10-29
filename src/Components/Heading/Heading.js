import React from "react"

export default function Heading({title}) {
    return (
        <div>
            <h1 className="heading">{title}</h1>
            {/* <h3 data-testid="heading2" title='Title'>Hello again</h3> */}
        </div>
    ) 
}