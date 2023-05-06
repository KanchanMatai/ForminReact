import React, { useState, useRef } from "react"; 
import './App.css';
const New = () => {

     const [formData, setFormData] = useState({
username:"",
email:"",
password: "",
confirm_password: "",
age:"",
});

const handleInput = (event) => {
    const name = event.target.name;
const value = event.target.value;


setFormData((prev) => {
return { ...prev, [name]: value };

});

};
return(
    <>
       <div className="container-fluid">
        <div className="row form">
            <div className="col-8 insideform">
            <h2 className="head">Registration Form</h2><br></br><br></br>
                <div className="form-group">
                <input
                type ="text"
                className="form-control"
                id ="name"
                name="username"
                placeholder="Name"
                autoComplete="off"
                value={formData.username}
                onChange={handleInput}
                />
            </div><br></br>
            <div className="form-group">
                <input
                type ="email"
                className="form-control"
                id ="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={formData.email}
                onChange={handleInput}
                />
            </div><br></br>
            <div className="form-group">
                <input
                type ="password"
                className="form-control"
                id ="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={formData.password}
                onChange={handleInput}
                />
            </div><br></br>
            <div className="form-group">
                <input
                type ="confirm_password"
                className="form-control"
                id ="confirmpassword"
                name="confirm_password"
                placeholder="Confirm password"
                autoComplete="off"
                value={formData.confirm_password}
                onChange={handleInput}
                />
            </div><br></br>
            <div className="form-group">
                <input
                type ="number"
                className="form-control"
                id ="age"
                name="age"
                placeholder="Age"
                autoComplete="off"
                value={formData.age}
                onChange={handleInput}
                />
            </div><br></br>
            
            <button className="mybtn">Create account</button>
            <div>
            <p>{`My name is ${formData.username}` }</p>
            <p>{`My email is ${formData.email}` }</p>
            <p>{`My password is ${formData.password}` }</p>
            <p>{`My confirmed password is ${formData.confirm_password}` }</p>
            <p>{`My age is ${formData.age}` }</p>
            </div>
            </div>
           
        </div>
       </div>
    </>
)
}

export default New;