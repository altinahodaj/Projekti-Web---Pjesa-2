const LogInbtn=document.getElementById('login');
LogInbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const username=document.getElementById('userid');
    const password=document.getElementById('password');
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    if (username.value =="") {
        alert("Please add the user.");
        username.focus();
        return false;
    }
    if (password.value == "") {
        alert("Pelase add the password.");
        password.focus();
        return false;
    }
    if (name.value == "") {
        alert("Please add the name.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        alert("Please add the email.");
        email.focus();
        return false;
    }
    else{
        alert("Login was successful.");
    }
});
