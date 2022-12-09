$(document).ready(function () {
})

window.addEventListener('scroll', function() {
    if($(window).scrollTop() >= $('.header').height()){
       $('.header').addClass('static');
    }else{
      $('.header').removeClass('static');
    }
})

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('exampleModal')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})