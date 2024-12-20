document.getElementById("submit").addEventListener('click', ()=>{
    console.log('first')
    if(!document.getElementById('enq-form').checkValidity()){
        document.getElementById('enq-form').reportValidity();
        return
    }
})

document.getElementById("hambur").addEventListener('click', ()=>{
    
})