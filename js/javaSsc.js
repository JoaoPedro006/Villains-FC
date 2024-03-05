const myobserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.sessao-1')
elements.forEach((element) => myobserver.observe(element))

    const menuMobile = document.getElementById('menu-mobile')
    const clicar = document.getElementById('botao');

    clicar.addEventListener('click', function(){
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
          } else {
            menuMobile.style.display = "flex";
          }
     });


