const bgr12 = document.querySelector('.select-items')
const bgr21 = document.querySelector('.PerviyContactGreen2')
const bgr42 = document.querySelector('.select-selected')
bgr42.classList.add('selectSelectInportantDropDownGreen2')
const option12 = bgr42


option12.addEventListener('click', function(){
  if (option12.innerHTML == 'He Активний') {
    bgr42.style.background = '#FF9D9D' 
    bgr12.style.background = 'transparent' 
    bgr21.style.background = '#FF9D9D' 
    bgr42.style.margin = "-4px 10px 0px 0px"
    bgr42.style.height = "22px"
  } else if (option12.innerHTML == 'Активний') {
    bgr42.style.background = '#B1FF9D'
    bgr12.style.background = 'transparent' 
    bgr21.style.background = '#B1FF9D'
    bgr42.style.margin = "-4px 10px 0px 0px"
    bgr42.style.height = "22px"
  }
});