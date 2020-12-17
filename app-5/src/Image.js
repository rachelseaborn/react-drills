import React, { Component } from 'react'

class newImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src} />
                <div>Good morning!</div>
            </div>
        )
    }
}


export default newImage;