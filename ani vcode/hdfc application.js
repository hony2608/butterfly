function validation(){
    let inputOne=document.getElementById("id");
    let inputValueOne=inputOne.value;
    let inputTwo=document.getElementById("pass");
    let inputValueTwo=inputTwo.value;
if(inputValueOne=="12345678" && inputValueTwo=="hdfc@1234"){
    location.href="netbanking.html";
}else{
    alert("error");
}
}