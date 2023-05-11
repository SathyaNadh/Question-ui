import React from 'react'

 export const Select = (props) => {
    const {name,lbl,options,fnChange,val,errorMsg,isShowErrorMsg}=props
    return (
      <div className='row mb-4'>
          <div className='col-sm-5 text-end'>
            <b>{lbl} :</b>
          </div>
          <div className='col-sm-3'>
           <select name={name}  onChange={fnChange} className='form-control'>
            <option value=" ">Please Select</option>
            {
                options.map((value,index)=>{
                    return <option   selected={value==val} values={value} key={index}>{value}</option>
                })
            }
           </select>
          </div>
          <div className='col-sm-4'>
          {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
          </div>
  
      </div>
    )
  }