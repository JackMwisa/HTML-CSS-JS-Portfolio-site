
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control') 
const allSections = document.querySelector('.main-content')

function pageTransistions(){
    //Button click active class

    for (let i=0, i < sectBtn.length; i++){
        
        sectBtn[i].addEventListener('click', () = {
            
            let currentBtn = document.querySelectorAll('.active-btn'),
            currentBtn[0].classList = currentBtn[0].className,            
        })
    }

}