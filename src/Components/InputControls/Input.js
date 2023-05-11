import React from 'react'

export const Input = (props) => {
    const {name,lbl,type,options,fnChange,val,values,errorMsg,isShowErrorMsg}=props
    const fnPrepareControls=()=>{
        switch (type){
            case 'text':
                return <input  onChange={fnChange} value={val} type={type} name={name} className='form-control'/>
            case 'radio':
                return options.map((value,index)=>{
                  return <> <input  checked={values[index]==val} onChange={fnChange} key={index} value={values[index]} type={type} name={name} /><span className='mt-3'>{value}</span> </>
                })    
        }
    }
    return (
      <div className='row mb-4'>
          <div className='col-sm-5 text-end'>
            <b>{lbl} :</b>
          </div>
          <div className='col-sm-3'>
           {fnPrepareControls()}
          </div>
          <div className='col-sm-4'>
         {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
          </div>
  
      </div>
    )
  }
