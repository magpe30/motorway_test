import { useState} from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        date: '',
        favColor: '',
        salary: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.id]: event.target.value
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        setErrors(validate(values))
        console.log(values)
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;