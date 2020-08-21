"use-strict"

const init = function(e){
    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const name = params.get('appfname');
    document.getElementById('fname').innerHTML = name;
    document.getElementById('firstname').value = name;
}



document.addEventListener('DOMContentLoaded',function(){
    init();
});


function handleSubmit () {
    const firstname = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;

    // to set into local storage
    /*localStorage.setItem("FIRSTNAME", firstname);
    localStorage.setItem("SURNAME", surname); */
    
    // to set into session storage
    /*sessionStorage.setItem("FIRSTNAME", firstname);
    sessionStorage.setItem("SURNAME", surname);*/ 

    return;
}