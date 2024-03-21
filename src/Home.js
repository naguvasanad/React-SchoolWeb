import React, { useEffect, useState } from 'react'
import "./Home.css"
import "bootstrap/dist/css/bootstrap.css"

const Home = () => {

  const [student,setStudent] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/students")
    .then(response=>response.json())
    .then(json=>{
       setStudent(json);
    }).catch(err=>console.log(err))
  },[])

  return (
    <>
    <div className='container'>
      <table className='table table-striped table-dark'>
        <thead >
            <tr>
              <th scope="col">StudentID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Course</th>
            </tr>
            </thead>
            <tbody>
              {student.map((item,key)=>{
                return(
                  <tr key={key}>
                    <td>{item.Studentid}</td>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Course}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
     
    </>
  )
}

export default Home
