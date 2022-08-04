let toggleBar = document.querySelector('.three-bar')
let navMenu = document.querySelector('.nav-menu-content')
let barIcon = document.querySelector('.bar-icon')
let xIcon = document.querySelector('.x-icon')
let hideMenu = window.matchMedia("(max-width : 991px)")

hideMenu.addEventListener('load', function(){
    navMenu.style.display = 'none'
})

// toggleBar.addEventListener('click', function(){
//     if(navMenu.style.display === 'none'){
//         navMenu.style.display = 'block'
//         xIcon.innerHTML = '&times;'
//         barIcon.style.display = 'none'
//     } else{
//         navMenu.style.display = 'none'
//         xIcon.innerHTML = ''
//         barIcon.style.display = 'block'
//     }
// })



toggleBar.addEventListener('click', function(){
    if(navMenu.style.display === 'block'){
        navMenu.style.display = 'none'
        xIcon.innerHTML = ''
        barIcon.style.display = 'block'
        toggleBar.style.marginTop = '7px'

    } else{
        navMenu.style.display = 'block'
        xIcon.innerHTML = '&times;'
        barIcon.style.display = 'none'
    }
})





















