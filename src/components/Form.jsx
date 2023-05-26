import React, { useState } from 'react'
import Center from './Center'
import { Add } from '../API/Add'
import { Add1 } from '../API/Add1'

const Form = () => {

const [data,setData] = useState({
  name:"",
  email:"",
  mobile:""

})
const [data1,setData1] = useState({
  name:"",
  email:"",
  mobile:""

})


const onValueChange = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
  
}
const onValueChange1 = (e)=>{
  setData1({...data1,[e.target.name]:e.target.value})
  
}


console.log(data)
console.log(data1)

const addData = async ()=>{
  
  const data2 = [data,data1];
  await Add(data2);
  

}




  return (
    <>
    < Center>
    <div class="w-full max-w-lg mx-auto">
    <h1 className="text-3xl font-bold mb-3">
      Table 1
    </h1>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter your name" onChange={(e)=>onValueChange(e)} name="name" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="Enter your email" onChange={(e)=>onValueChange(e)} name="email" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your phone number" onChange={(e)=>onValueChange(e)} name="mobile" />
    </div>
    
  </div>
</div>




<div class="w-full max-w-lg mx-auto">
<h1 className="text-3xl font-bold mb-3">
      Table 2
    </h1>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter your name" onChange={(e)=>onValueChange1(e)} name="name" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="Enter your email" onChange={(e)=>onValueChange1(e)} name="email" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter your phone number" onChange={(e)=>onValueChange1(e)} name="mobile" />
    </div>
  </div>
</div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>addData()}>
        Submit
      </button>
    </div>
</Center>




    </>
  )
}

export default Form
