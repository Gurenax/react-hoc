import React from 'react'
import { enhancer } from './hoc/Enhancer';

const Sample = ({ visible }) => {
  return visible ? <div>I am Visible</div> : <div>I am not Visible</div>
}

export default enhancer()(Sample)