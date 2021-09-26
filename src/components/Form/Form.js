import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

const Form = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    
    return (
      <div className='form'>
          <h1 className="heading-text">contact</h1>
          <form className="form-container">
          <label>Your Name</label>
            <input id="username" type="text" placeholder = "Enter your name"
                    value = {values.username}
                    onChange = {handleChange}
                        
            />
            { errors.username && <p className="alert">{errors.username}</p> }
            <label>Email address</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                             
            />
            {errors.email && <p className="alert">{errors.email}</p>}
            <label>Date of Birth</label>
            <input 
                type="date"
                id="date"
                placeholder="Provide your date of birth"
                value={values.date}
                onChange={handleChange}
                           
            />
            {errors.date && <p className="alert">{errors.date}</p>}
            <label>Favourite color</label>
            <input 
                    
                type="text"
                id="favColor"
                placeholder="Please tell us your favourite colour"
                value={values.favColor}
                onChange={handleChange}
                              
            />
            {errors.favColor && <p className="alert">{errors.favColor}</p>}
            <label>Salary (annual)</label>
            <input type="number"
                    id="salary"
                    min="0" max="500000" 
                        
            />
            {errors.salary && <p className="alert">{errors.salary}</p>}
            <button className="submit" onClick = {handleSubmit}>Send</button>
        </form>
      </div>
    );
}
  
export default Form;