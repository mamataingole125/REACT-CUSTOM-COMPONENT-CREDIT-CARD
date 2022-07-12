import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import PinItem from './PinItem'
import PropTypes, { element } from "prop-types"

const Pin = ({length,setOtpHandler}) => {

  const [inputBoxLen]=useState(new Array(length).fill(1))
    const [inputBoxValue,setInputBoxValue]=useState(new Array(length).fill(""))
    const inputRef=useRef([])
    

    const handleChange=(e,index)=>{

      inputBoxValue[index]=e.target.value
      setInputBoxValue(inputBoxValue)
      console.log(inputBoxValue)
      console.log(e.target.value.length)
      if(e.target.value.length==4 && index<length-1){
        inputRef.current[index+1].focus();
           }
       setOtpHandler(inputBoxValue.join(""))


       if (e.target.value.length === 4) {
        inputRef.current[index].className = "green";
      }
      if (e.target.value.length < 4) {
        inputRef.current[index].className = "red";
      }
    }



    const onBackSpaceHandler=(e,index)=>{

      if(index>0 && e.target.value.length==0){
        inputRef.current[index-1].focus();
           }
           inputBoxValue[index]=e.target.value;
           setInputBoxValue(inputBoxValue);
           setOtpHandler(inputBoxValue.join(""))

    }


    const handlePaste=(e)=>{

      e.preventDefault()
      console.log(e)

      console.log(e.clipboardData.getData("text"));
    const data=e.clipboardData.getData("text").split("")
    .filter((item,index)=>index<length)

    console.log(data)

    data.forEach((value,index)=>{
      inputBoxValue[index]=value 
      console.log(inputRef.current[index].value)
      inputRef.current[index].value=value;
     
      if(index<length-1 && e.target.value==4){
          inputRef.current[index+1].focus();
      }
  })
    }

  return (
    <div onPaste={handlePaste}>

        {inputBoxLen.map((item,index)=>(

            <PinItem 
            key={index}

            ref={(element)=>{
              console.log(element);
              inputRef.current[index]=element
            }}
            changeHandler={(e)=>handleChange(e,index)}

            onBackSpaceHandler={(e)=>onBackSpaceHandler(e,index)}

            />
        ))
        }
    </div>
  )
}


Pin.propTypes={
    length:PropTypes.number.isRequired,
}

export default Pin