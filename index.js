let screen = document.querySelector(".screen1")
let btn = document.querySelectorAll(".btn")
let output = document.querySelector(".output")
console.log(btn)
function shownumber(num){
    // screen.innerText = num;
  console.log(screen.innerText.length)
    if(screen.innerText==0){
        screen.innerText=num; 
    }else{
        screen.innerText+=num
        console.log(screen.innerText)
    }
}

function cleared(){screen.innerText=0;}
function backspace(){
if(screen.innerText>1){
screen.innerText = screen.innerText.substring(0, screen.innerText.length-1)
}
}

btn.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(screen.innerText.includes(item.innerText)){
            item.classList.add("is-depressed")
        }
        else{
            screen.innerText +=item.innerText
        }
    })
    
})
function equallTo(){
    output.innerText=eval(screen.innerText)
}
// function unshift(){
//     screen.innerText=eval(-1*screen.innerText)
// }
function plusminus(){
    let myarr = []
    if (screen.innerText>=1){
        myarr.push(screen.innerText)
        myarr.unshift("-")
        screen.innerText = myarr.join("")
    }
    else{screen.innerText=screen.innerText}
}