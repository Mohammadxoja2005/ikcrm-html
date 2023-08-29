const bgr12 = document.querySelector('.select-items')
const bgr21 = document.querySelector('.klientNameInformatsiaButtonKontact')
const bgr42 = document.querySelector('.select-selected')
bgr42.classList.add('selectSelectInportantDropDownGreen')
const option12 = bgr42
console.log(option12);

option12.addEventListener('click', function(){
  if (option12.innerHTML == 'Первый контакт') {
    console.log('Qizil');
    bgr42.style.background = '#FF9D9D' 
    bgr12.style.background = 'transparent' 
    bgr21.style.background = '#FF9D9D' 
    bgr42.style.margin = "-4px 10px 0px 0px"
    bgr42.style.height = "22px"
  } else if (option12.innerHTML == 'Переговоры') {
    console.log('Sariq');
    bgr42.style.background = '#F7FF9C'
    bgr21.style.background = '#F7FF9C'
    bgr12.style.background = 'transparent' 
    bgr42.style.margin = "-4px 10px 0px 0px"
    bgr42.style.height = "22px"
  } else if (option12.innerHTML == 'Оформление сделки') {
    console.log('Yashil');
    bgr42.style.background = '#B1FF9D'
    bgr21.style.background = '#B1FF9D'
    bgr12.style.background = 'transparent' 
    bgr42.style.margin = "-4px 10px 0px 0px"
    bgr21.style.margin = "-4px 10px 10px 0px"
    bgr42.style.height = "22px"
  }
});