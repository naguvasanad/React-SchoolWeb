import React from 'react';
import  { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import "./Service.css"

const Service = () => {

  const [student,setStudent] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/students")
    .then(response=>response.json())
    .then(json=>{
       setStudent(json);
    }).catch(err=>console.log(err))
  },[])

  const handleAddStudent = (event) =>{
    event.preventDefault();
    window.location.href = "/AddStudent"
  }

const handleDelete = (e,item)=>{
  e.preventDefault();
  console.log(item.Studentid);
  fetch("http://localhost:8080/DeleteStudent?name="+ item.Studentid)
  .then(response=>response.json())
  .then(alert("deleted"))
  .catch(err=>console.log())
  
}

  return (
    <>
    <div className='service_container' id='Add_btn'>
           <button className='btn btn-success'onClick={handleAddStudent} >Add Student</button>

          </div>
    <div className='container1'>
      
      <table className='table table-striped '>
        <thead >
            <tr>
              <th scope="col">StudentID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Standard</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
              {student.map((item,key)=>{
                return(
                  <tr key={key}>
                    <td>{item.Studentid}</td>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Standrad}</td>
                    <td>{item.Address}</td>
                    <td>{item.Phone_Num}</td>
                    <td><RiDeleteBin6Line style={{color:"red"}} onClick={(e)=>handleDelete(e,item)}/></td>
                    <td><CiEdit style={{color:"blue"}}/></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          </div>
          
          
     
    </>
  )
}

export default Service
