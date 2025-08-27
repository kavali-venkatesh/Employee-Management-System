import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({ firstName:"", lastName:"", email:"" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveHandle = (e) => {
    e.preventDefault();
    EmployeeService.addEmployee(employee).then(() => navigate("/employees"));
  };

  const cancelHandle = () => navigate("/employees");

  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col-6 offset-md-3'>
          <div className='card p-5'>
            <h3 className='text-center'> Add Employee </h3>
            <form>
              <div className='form-group'>
                <label className='my-3'>First Name :</label>
                <input type="text" name="firstName" className='form-control'
                  value={employee.firstName} onChange={handleChange}/>
                <label className='my-3'>Last Name :</label>
                <input type="text" name="lastName" className='form-control'
                  value={employee.lastName} onChange={handleChange}/>
                <label className='my-3'>Email :</label>
                <input type="text" name="email" className='form-control'
                  value={employee.email} onChange={handleChange}/>
                <button className='mt-3 btn btn-danger' onClick={cancelHandle}>cancel</button>
                <button className='mt-3 btn btn-success ms-3' onClick={saveHandle}>save</button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  )
}
export default CreateEmployeeComponent;
