import React from 'react'

export default function Alert(props) {
  const cap =(word)=>{
    const lowe = word.toLowerCase();
    return lowe.charAt(0).toUpperCase() + lowe.slice(1);
  }
  return (

    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{cap(props.alert.type)}</strong> : {props.alert.msg}.
  
</div>
  )
}
