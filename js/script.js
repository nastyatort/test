const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

const burger = () => {
  console.log('burger');

  if(menuList.classList.contains('show')){
    menuList.classList.remove('show');
    menuBtn.textContent = 'show'
  }else{
    menuList.classList.add('show');
    menuBtn.textContent = 'hide'
  }

}

menuBtn.addEventListener('click', burger);