// header scroll animation
const header = document.querySelector('#home');
document.addEventListener("scroll",()=>{
    header.classList.toggle("scroll-shadow",window.scrollY>60)
    
})

// nav menu toggler
const toggler = document.querySelector('#toggler-button');
const menu = document.querySelector('.nav-menu');
toggler.addEventListener("click",()=>{
    if(!menu.classList.contains('nav-active'))
    {
        menu.classList.remove('nav-deactive')
        menu.classList.add('nav-active')
        menu.style.pointerEvents = 'all'
    }
    else{
        menu.classList.remove('nav-active')
        menu.classList.add('nav-deactive')
        menu.style.pointerEvents = 'none'
    }
})



// about us accordian script
const accordian = document.querySelectorAll("#why-us .accordian-wrap .accordian");
console.log(accordian)
accordian.forEach((acc)=>{

    const head =acc.querySelector(".acc-head")
    head.addEventListener("click",()=>{
        let flag=acc.classList.contains("active")
        accordian.forEach((a)=>{
            if(a.classList.contains("active")){
                
                a.classList.remove("active");
            }
        })
        acc.classList.toggle("active",!flag)
    })
})


// question accordian
const question_accordian = document.querySelectorAll("#question .accordian-wrap .accordian");
question_accordian.forEach((acc)=>{

    const head =acc.querySelector(".acc-head")
    head.addEventListener("click",()=>{
        let flag=acc.classList.contains("active")
        question_accordian.forEach((a)=>{
            if(a.classList.contains("active")){
                
                a.classList.remove("active");
            }
        })
        acc.classList.toggle("active",!flag)
    })
})