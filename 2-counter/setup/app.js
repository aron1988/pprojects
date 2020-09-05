let count =0;
  
// let increase = document.querySelector('.increase')
// let decrease = document.querySelector('.decrease')
// let reset = document.querySelector('.reset')

let btns = document.querySelectorAll('.btn')
let value = document.querySelector('#value')
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--


        }else if(styles.contains("increase")){
            count++
        }else{
            count=0
        }
        value.textContent = count
        if(count>0){
            value.style.color = 'red'
        }else if(count<0){
            value.style.color = 'green'

        }

    })
})