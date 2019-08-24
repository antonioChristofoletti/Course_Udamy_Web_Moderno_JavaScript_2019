import React from 'react'


function extractChildrensFromProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
    })
}

export default props =>
    <div className="card">
        <h5 className="card-header">{props.title}</h5>
        <div className="card-body">
            {extractChildrensFromProps(props)}
        </div>
    </div>