 export const fnValidate=(obj)=>{
    const {name,val}=obj
    obj.errorMsg=''
    obj.isShowErrorMsg=false
    switch (name){
        case 'ques':
    if(!val){
       obj.errorMsg='Enter The Question'
    }else{
        if(val.length < 20){
            obj.errorMsg='Showuld be contains min 20 characters'
        }
    }
    if(obj.errorMsg){
        obj.isShowErrorMsg=true
        

    }
    break
    case 'opt1':
    case 'opt2':
    case 'opt3':
    case 'opt4':
        if(!val){
            obj.errorMsg='Enter The Option'
            obj.isShowErrorMsg=true
        }  
        break  
        case 'type':
        case 'ans':
            if(!val){
                obj.errorMsg='Enter The Option'
                obj.isShowErrorMsg=true
            }    
            break  


    }  

}

