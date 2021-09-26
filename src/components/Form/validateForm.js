export default function validateForm(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Name is required";
    }else if(values.username.trim().length < 2){
        errors.username = "Name is not valid";
    }

    if(values.email === undefined || values.email === "") {
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email in not valid"
    }

    if(values.date === undefined || values.date === ""){
        errors.date = "Date is required"
    }

    if(values.favColor.trim() === undefined || values.favColor.trim() === ""){
        errors.favColor = "Favourite Color is required"
    }else if(typeof values.favColor.trim() !== "string"){
        errors.favColor = "favourite Color is invalid"
    }else if(values.favColor.trim().length <= 2){
        errors.favColor = "favourite Color is invalid"
    }

    if(!values.salary){
        errors.salary = "Salary is required"
    }

    return errors;
}