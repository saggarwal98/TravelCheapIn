window.onload=function(){
    let userEmail=document.getElementById('userEmail');
    let userPassword=document.getElementById('userPassword')
    let submitbtn=document.getElementById('submitbtn')
    let phonenumber=document.getElementById('phonenumber')
    let datetime=document.getElementById('datetime')
    let startcity=document.getElementById('startcity')
    let destcity=document.getElementById("destcity")
    let checktc=document.getElementById("checktc")
    let f1=document.getElementById("f1")
    let m1=document.getElementById("m1")
    let l1=document.getElementById("l1")
    let showpass=document.getElementById('showpass')
    datetime.append(new Date())
    // var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var regularExpression = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9].{8,16}$/);
    function saveToStorage(){
        localStorage.setItem("f1",JSON.stringify(f1.value));
        localStorage.setItem("m1",JSON.stringify(m1.value));
        localStorage.setItem("l1",JSON.stringify(l1.value));
        localStorage.setItem("userEmail",JSON.stringify(userEmail.value));
        localStorage.setItem("userPassword",JSON.stringify(userPassword.value));
        localStorage.setItem("phonenumber",JSON.stringify(phonenumber.value));
        localStorage.setItem("startcity",JSON.stringify(startcity.value));
        localStorage.setItem("destcity",JSON.stringify(destcity.value));
    }
    function clearStorage(){
        localStorage.clear();
    }
    function fillFromStorage(){
        if(!(JSON.parse(localStorage.getItem("f1"))=="")){
            f1.value=JSON.parse(localStorage.getItem("f1"));
        }
        if(!(JSON.parse(localStorage.getItem("m1"))=="")){
            m1.value=JSON.parse(localStorage.getItem("m1"));
        }
        if(!(JSON.parse(localStorage.getItem("l1"))=="")){
            l1.value=JSON.parse(localStorage.getItem("l1"));
        }
        if(!(JSON.parse(localStorage.getItem("userEmail"))=="")){
            userEmail.value=JSON.parse(localStorage.getItem("userEmail"));
        }
        if(!(JSON.parse(localStorage.getItem("userPassword"))=="")){
            userPassword.value=JSON.parse(localStorage.getItem("userPassword"));
        }
        if(!(JSON.parse(localStorage.getItem("phonenumber"))=="")){
            phonenumber.value=JSON.parse(localStorage.getItem("phonenumber"));
        }
        if(!(JSON.parse(localStorage.getItem("startcity"))=="")){
            startcity.value=JSON.parse(localStorage.getItem("startcity"));
        }
        if(!(JSON.parse(localStorage.getItem("f1"))=="")){
            destcity.value=JSON.parse(localStorage.getItem("destcity"));
        }
    }
    fillFromStorage();
    showpass.onclick=function(){
        if(userPassword.type === "password"){
            userPassword.type = "text";
        }
        else{
            userPassword.type="password";
        }
    }
    submitbtn.onclick=function(){
        saveToStorage();
        if(userEmail.value === ""){
            window.alert("Please enter email")
        }
        else if((!userEmail.value.includes('@')) || (userEmail.value.split('@')[1] === "") || (userEmail.value.split('@')[1].split('.')[1] === "")){
            window.alert("Please enter correct email")
        }
        else if(userPassword.value === ""){
            window.alert("Please enter password")
        }
        else if((userPassword.value.length<8)||(userPassword.value.length>16)){
            window.alert("Please enter password between 8 to 16 characters")
        }
        else if(!regularExpression.test(userPassword.value)) {
            window.alert("password should contain atleast one number, one special character, one small alphabet and one capital alphabet");
            return false;
        }
        else if(phonenumber.value === ""){
            window.alert("Please enter phone number")
        }
        else if(!((phonenumber.value.length==8)||(phonenumber.value.length==10))){
            window.alert("Please enter valid phone number")
        }
        else if(startcity.value === ""){
            window.alert("Please enter Start City")
        }
        else if(destcity.value == "Select one"){
            window.alert("Please enter End City")
        }
        else if(checktc.checked == false){
            window.alert("Please agree to Terms and Conditions")
        }
        else{
            clearStorage();
            window.alert("We will contact you within 24 hours");
            // window.close();
            window.open('../index.html');
            
        }
    }
}
