const btn = document.getElementById('btn');


// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');


import * as myData from "./form-data.js"



btn.addEventListener('click', (e) => {
    e.preventDefault()

    myData.addData()
    console.log(myData.userData);
    
    

})

















