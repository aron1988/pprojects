


const toggleBtn = document.querySelector('.sidebar-toggle')
const closeeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar')
})
closeeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})