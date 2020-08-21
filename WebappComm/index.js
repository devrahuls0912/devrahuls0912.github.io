function handleSubmit () {
    const firstname = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;

    // to set into local storage
    /*localStorage.setItem("FIRSTNAME", firstname);
    localStorage.setItem("SURNAME", surname); */
    
    // to set into session storage
    sessionStorage.setItem("FIRSTNAME", firstname);
    sessionStorage.setItem("SURNAME", surname); 

    return;
}