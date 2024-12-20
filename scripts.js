document.getElementById("submit").addEventListener('click', ()=>{
    console.log('first')
    if(!document.getElementById('enq-form').checkValidity()){
        document.getElementById('enq-form').reportValidity();
        return
    }
    document.getElementById('modal').classList.toggle('hidden')


})

document.getElementById("hambur").addEventListener('click', ()=>{
    document.querySelector('.nav-mobile').classList.toggle('hidden')
})

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal').classList.toggle('hidden')
})