
const toggleIcon = document.querySelector('.toggle-icon')
const container = document.querySelector('.container__theme1')
const body = document.querySelector('body')
const attr = document.querySelector('.attribution')
const button = document.querySelector('button')



button.addEventListener('click', () => {
   if(container.classList.contains('container__theme1')){
       container.classList.remove('container__theme1')
       container.classList.add('container__theme2')
       body.style.background='hsl(0, 0%, 100%)'

       attr.style.color ='red'
   }

   else{
    container.classList.add('container__theme1')
    container.classList.remove('container__theme2')
    body.style.background='hsl(230, 17%, 14%)'
   }
})