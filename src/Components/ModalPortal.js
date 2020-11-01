import React from 'react'
import {createPortal} from "react-dom";
const ModalPortal=(props)=>{
  return createPortal(props.children, document.getElementById('root'));
}
export default ModalPortal