import React, { Component } from 'react'

export const enhancer = () => {
  return (BaseComponent) => {
    return class extends Component {
      state = { visible: false }

      componentDidMount() {
        let valueOfVisible = null;
        
        if(this.props.visible) {
          // I want this component to set the value of props visible if its present
          valueOfVisible = this.props.visible
          this.setState({ visible: valueOfVisible });
        } else {
          // Otherwise it's going to randomly set the value to true or false
          const randomNumber = Math.random()*100
          valueOfVisible = randomNumber > 50 ? true : false
        }

        this.setState({ visible: valueOfVisible })
      }
      render() {
        return <BaseComponent {...this.props} {...this.state} />
      }
    }
  }
}