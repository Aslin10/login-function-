const formgroup=document.getElementById("formgroup");
const username=document.getElementById("username");
const password=document.getElementById("password");
const email=document.getElementById("email");
const password2=document.getElementById("password2");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isAlpha = function() {
    return !!this.match(/^[a-zA-Z]+$/);
}



function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim()===""){
            //error message
            errorInput(input,`${getName(input)} is Required`);
        }else{
            successInput(input);
        }
    });
}
function getName(input){
    return input.getAttribute("data-name");
}
function errorInput(input,message){
    const container =input.parentElement;
    container.className="container fail";
    const p = container.querySelector("p");
    p.innerText=message;
}


function successInput(input){
    const container=input.parentElement;
    container.className="container success";
    const p= container.querySelector("p");
    p.innerText="";
}
function checkLength(input){
    
    if(input.value.trim().length<=15 && input.value.trim().length>=5){
        alert("success");
    
    }  else{
        errorInput(input,`${getName(input)} must be between  5-10 characters long`); 
    }
}
 function checkPassword(password,password2)
 {
if(password.value!=password2.value){
    errorInput(password2,`${getName(password2)} does not match`); 
}
 }
 
function  checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input,`please fill the correct email address`);   
    }
}
 
 function checkAlpha(input){
    if(!input.value.trim().isAlpha()){
        errorInput(input,`${getName(input)}  must be Alphabets`);   
    }
 }
formgroup.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username);
    
    checkPassword(password,password2);
    checkEmail(email);
    checkAlpha(username);

    })