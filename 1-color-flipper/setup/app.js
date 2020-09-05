const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');


button.addEventListener('click',function(){
    const getRand = getRandom()
    console.log(getRand);
    document.body.style.background =colors[ getRand]
    color.textContent = colors[getRand]
})

function getRandom(){
  return  Math.floor(Math.random()*colors.length)
}