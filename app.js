
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control') 
const allSections = document.querySelector('.main-content')

function pageTransistions(){
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++){
        
        sectBtn[i].addEventListener('click', function() {
            
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); 
            this.className += " active-btn"      
        })
    }


    //section active button class
    allSections.addEventListener('click', (e) => {
        const id = e.target.id.dataset;

        if (id){
         //remove selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
           })
           e.target.classList.add('active')

        //hiding unselected sections

            sections.forEach((section ) => {
                sections.classList.remove('active')
            })

        const element = document.getElementById(id);
        element.classList.add('active');

        }
    })
}

pageTransistions();