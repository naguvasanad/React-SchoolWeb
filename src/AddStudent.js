import React, { useState } from 'react'
import "./AddStudent.css"
import { PiStudent } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.css"


const AddStudent = () => {

    const [fname,setFname] = useState();
    const [lname,setLname] = useState();
    const [std,setStd] = useState();
    const [address,setAddress] =useState();
    const [phone,setPhone] = useState();


    const handleBack = (event) =>{
      event.preventDefault();
      window.location.href="/Service"
    }

   

    const handleSave = (e) =>{
        e.preventDefault();
        var NewStudent ={
            FirstName:fname,
            LastName:lname,
            Standard:std,
            Address:address,
            Phone:phone
        }

       fetch("http://localhost:8080/CreateStudent",
       {
        method:"post",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          Student:NewStudent
        })
       }).then(response=>response.json())
       .then(json=>{
        if(json>0){
            alert('Saved')
        }else{
           
        }
       }).catch(err=>console.log('Failed'+err))
       
    }

  return (
    <div className='container'>
        <div>
      <h2>Add <PiStudent style={{color:"rebeccapurple"}}/></h2>
      <form>
        <div>
        <label for="Fname">FirstName:</label> <br/>
        <input type='text'  className='form-control'
        value={fname}
         onChange={(event)=>setFname(event.target.value)} 
        /> 
        </div>

        <div>
        <label for="Lname">LastName:</label> <br/>
        <input type='text' className='form-control'
         value={lname}
         onChange={(event)=>setLname(event.target.value)} 
        />
        </div>

        <div>
        <label for="Standard">Standrad:</label> <br/>
        <input type='number'  className='form-control'
         value={std}
         onChange={(event)=>setStd(event.target.value)} 
        />
        </div>

        <div>
        <label for="Address">Address:</label> <br/>
       <textarea className='form-control'
        value={address}
        onChange={(event)=>setAddress(event.target.value)} 
       />
       </div>
        
        <div>
       <label for="Phone">Phone:</label> <br/>
        <input type='tel' maxLength="10"  className='form-control'
         value={phone}
         onChange={(event)=>setPhone(event.target.value)} 
        /> 
        </div>
        
        <div>
            <label> Upload Iamge:</label> <br/>
            <input type='file' alt=''/>
        </div>

        <div>
            <button style={{marginTop:"10px",marginBottom:"5px"}} className='btn btn-success'onClick={(e)=>handleSave(e)} >Save</button>
            <button id='btn_back' style={{marginTop:"10px"}} className='btn btn-info' onClick={handleBack}>Back</button>
        </div>
        
      </form>
      </div>
    </div>
  )
}

export default AddStudent
