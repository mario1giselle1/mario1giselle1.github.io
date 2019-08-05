'use strict'

function setinner(id,text) //created function
{
    document.getElementById(id).innerHTML=text;
}

function Re_Enter_Password()
{
     setinner("New_Text","Enter New Password here");
    
}
function Login_Function()
{
    alert("Confirmed you can now view our services");
    setinner("Login_head","SERVICES");
    setinner("imgbox1"," ");
}
//sign up section-------------------
function Register_Button(){
    alert("Thanks for sigining up log in to view our services");
}