let userName=document.getElementById("username");
let nameErrormessage=document.getElementById("name-error-message");
let userEmail=document.getElementById("useremail");
let emailErrorMessage=document.getElementById("email-error-message")
let maleGender=document.getElementById("male-gender");
let femaleGender=document.getElementById("female-gender");
let submitButton=document.getElementById("submit-button");
let addUserNameElement=document.getElementById("adduser-name");
//add eventListener to username
userName.addEventListener("blur",function(event){
    let userNameValue=userName.value;
    if(userNameValue===""){
        nameErrormessage.textContent="Required*";
    }  
    else{
        nameErrormessage.textContent="";
    }
})
//add eventListener to userEmail
userEmail.addEventListener("blur",function(event){
    let userEmailValue=userEmail.value;
    if(userEmailValue===""){
        emailErrorMessage.textContent="Required*";
    }  
    else{
        emailErrorMessage.textContent="";
    }
})
function userDetails(event){
    event.preventDefault();
     
    let userEmailValue=userEmail.value;
    let userNameValue=userName.value;
    if(userNameValue===""){
        nameErrormessage.textContent="Required*";
    }  
    else{
        nameErrormessage.textContent="";
    }
    
    if(userEmailValue===""){
        emailErrorMessage.textContent="Required*";
    }  
    else{
        emailErrorMessage.textContent="";
    }
    
    
}
submitButton.addEventListener("click",userDetails);


