window.addEventListener('load', () => {

    // Via Query parameters - GET
    /*const params = (new URL(document.location)).searchParams;
    const name = params.get('firstname');
    const surname = params.get('surname'); */

    // Via local Storage
    /*const name = localStorage.getItem('FIRSTNAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    // Via session Storage
     const name = sessionStorage.getItem('FIRSTNAME');
     const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;

})