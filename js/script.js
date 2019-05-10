const card =  document.getElementById('card'),
  btnFlip = document.getElementById('btnFlip'),
  btnBack = document.getElementById('btnBack')

btnFlip.addEventListener('click', function(){
  card.classList.toggle('is-flipped')
})

btnBack.addEventListener('click', function(){  
  card.classList.toggle('is-flipped')
})
