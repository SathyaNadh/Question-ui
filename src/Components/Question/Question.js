import React, { useDebugValue, useState } from 'react'
import { inputControlsArr } from './Config'
import { TextArea } from '../InputControls/TextArea'
import { Input } from '../InputControls/Input'
import { Select } from '../InputControls/Select'
import { fnValidate } from './Validate'
import { Loader } from '../Loader/Loader'
import { toast } from 'react-toastify';
import axios from 'axios'

 export const Question = () => {
    const [inputControls,setInputControls]=useState( inputControlsArr)
    const [showLoader,setShowLoader]=useState(false)
    const fnChange=( event)=>{
        const {name,value}=event.target
    let _inputControls=JSON.parse(JSON.stringify(inputControls))
       let inputControlObj= _inputControls.find((obj)=>obj.name==name)
       inputControlObj.val=value
       fnValidate(inputControlObj)
       setInputControls(_inputControls)
    
    }
    const fnSave=()=>{
        let dataObj={}
        let _inputControls=JSON.parse(JSON.stringify(inputControls))
        _inputControls.forEach((obj) => {
          dataObj[obj.name]=obj.val 
            fnValidate(obj)  
        });
        let isInValid= _inputControls.some((obj)=>{
             return obj.isShowErrorMsg
        })
        setInputControls(_inputControls)
        if(isInValid)return;

        setShowLoader(true)
         console.log({data:dataObj})
        axios.post('http://127.0.0.1:2020/ques/save-ques',{data:dataObj})
        .then((res)=>{
               setShowLoader(false)
               toast.success("Sucessfully Incerted")
               _inputControls.forEach((obj) => {
                obj.val=''
                });  
                setInputControls(_inputControls)
               console.log(res);
        })
        .catch((e)=>{
            setShowLoader(false)
            toast.error('Something Went Wrong'+e)
        })
    }
  return (
    <div className='container-fluid mt-4'>
        {
            inputControls.map((obj,index)=>{
            
                switch(obj.tag){
                    case 'input':
                        return <Input key={index} fnChange={fnChange} {...obj}/>
                    case 'textarea':
                        return<TextArea key={index} fnChange={fnChange} {...obj}/>
                    case 'select':
                        return <Select key={index}  fnChange={fnChange} {...obj}/>        
                }
            })
        }
        <div className='row'>
            <div className='offset-sm-5 col-sm-7'>
            <button  onClick={fnSave} className='btn btn-primary'>Save</button>
            </div>

        </div>
      {showLoader &&  <Loader></Loader>}

    </div>
  )
}
