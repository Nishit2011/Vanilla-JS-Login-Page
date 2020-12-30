var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");


const errorHandler = (ele, message) =>{
    const formControl = ele.parentElement;
    formControl.className ="form-control error";
    const small = formControl.querySelector("small");   
    small.innerHTML = message;
   
}

const successHandler = (ele) =>{
    const formControl = ele.parentElement;
    formControl.className ="form-control success";
    
}

const isValidEmail = (emailValue) =>{
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(emailValue);
}

const isValidPassword = (passwordValue) =>{
    const pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return pattern.test(passwordValue);
}


form.addEventListener("submit", function(e){
        e.preventDefault();    

    if(email.value === ""){    
        errorHandler(email, "Email required");
    }else if(!isValidEmail(email.value)){
        errorHandler(email, "Email is not valid")
    }
    else{
        successHandler(email)
    }
    if(password.value === ""){
        errorHandler(password, "Password required")
    }else if(!isValidPassword(password.value)){
        errorHandler(password, "Password is invalid")
    }else{
        successHandler(password)
    }
})