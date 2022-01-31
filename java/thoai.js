const open=document.querySelector('.pick')
const closes=document.querySelectorAll('.modal-close')
const modal=document.querySelector('.modal')

function show(){
    modal.classList.add('open')
}
function hide(){
    modal.classList.remove('open')
}

open.addEventListener('click',show)
for(const close of closes)
close.addEventListener('click',hide)

const Break=document.querySelector('.modal-break')
modal.addEventListener('click',hide)

function Break_modal(event){
    event.stopPropagation();
}
Break.addEventListener('click',Break_modal)
