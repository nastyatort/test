const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

const burger = () => {
  if(menuList.classList.contains('show')){
    menuList.classList.remove('show');
    menuBtn.textContent = 'show'
  }else{
    menuList.classList.add('show');
    menuBtn.textContent = 'hide'
  }
}

const outsideBurger = (e) => {

  const menuListWrapper = menuList.contains(e.target);

  if(menuList.classList.contains('show')){
    if(e.target !== menuList && e.target != menuBtn && !menuListWrapper) {
      menuList.classList.remove('show');
      menuBtn.textContent = 'show'
    }
  }
}

menuBtn.addEventListener('click', burger);

document.addEventListener('click', outsideBurger)