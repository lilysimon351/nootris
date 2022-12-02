let mobBtn = document.querySelector('.mob-btn');
let mobMenu = document.querySelector('.mob-menu');

mobBtn.onclick = function () {
    this.classList.toggle('active')
    mobMenu.classList.toggle('active')
    
}