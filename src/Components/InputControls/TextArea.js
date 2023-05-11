import React from 'react'

 export const TextArea = (props) => {
    const {name,lbl,fnChange,val,errorMsg,isShowErrorMsg}=props
  return (
    <div className='row mb-4'>
        <div className='col-sm-5 text-end'>
          <b>{lbl} :</b>
        </div>
        <div className='col-sm-3'>
         <textarea onChange={fnChange} value={val} name={name} className='form-control'/>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>

    </div>
  )
}
