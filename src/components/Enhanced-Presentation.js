import { compose, withState, withHandlers, withProps } from 'recompose'
import Presentation from './Presentation'

/**
 * Exmaple function using Recompose
 */
export default compose(
  withState('isVisible', 'toggleVis', false),
  withHandlers({
    toggleVisibility: ({
      toggleVis,
      isVisible
    }) => {
      return (event) => {
        return toggleVis(!isVisible)
      }
    }
  }),
  withProps(({ isVisible }) => {
    return {
      title: isVisible ? 'This is the visible title' : 'This is the default title',
      message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!'
    }
  })
)(Presentation)