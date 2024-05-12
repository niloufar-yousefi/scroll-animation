 let _main = document.getElementsByTagName('main')[0]
 let _div = document.querySelectorAll('main>div')
 let _img = document.querySelectorAll('main>div>img')

 _div.forEach(element => {
    let _offsetTop = element.offsetTop
    element.setAttribute('data-offsetTop',_offsetTop)
 })
 myFunc()
 function myFunc() {  
   _div[0].children[0].style.transform = ' translateY(0)'
   _div[0].children[1].style.transform = ' translateY(0)'
   _div[0].children[2].style.transform = ' translateY(0)'
 }

 _main.addEventListener('scroll',(e)=>{
 let _scrollTop = e.target.scrollTop + 350
  for (let index = 1; index < _div.length; index++) {
    const element = _div[index]
    let _child = element.children 
    if(_scrollTop > (element.getAttribute('data-offsetTop'))){            
      _child[0].classList.remove('_left','_scale')
      _child[1].classList.remove('_left','_scale')
      _child[2].classList.remove('_left','_scale')    
      }   
  }
 })

