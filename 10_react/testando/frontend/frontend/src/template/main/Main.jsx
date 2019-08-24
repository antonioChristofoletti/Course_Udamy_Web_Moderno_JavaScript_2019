import React from 'react'

import './Main.scss'

function extractChildrensFromProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
    })
}

export default props =>
    <main className="main">
        <div className="main__container">
            {extractChildrensFromProps(props)}
        </div>
    </main> 