import { compose, withState, withHandlers, withProps } from 'recompose'
import Counter from './Counter'

/**
 * Enhanced Counter
 */
export default compose(
  withState('value', 'changeValue', 0),
  withHandlers({
    increaseValue: ({ changeValue, value }) => event => changeValue(value+=1),
    decreaseValue: ({ changeValue, value }) => event => changeValue(value-=1)
  }),
  withProps(({ value }) => {
      return {
        value: value
      }
    }
  )
)(Counter)