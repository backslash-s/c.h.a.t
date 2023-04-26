let i = 0
let j = 0
let cmdOne = document.getElementById("cmd-1")
let cmdTwo = document.getElementById("cmd-2")
let text1 = " chat \"What is chatgpt?\""
let text2 = " ChatGPT is an artificial intelligence chatbot developed by OpenAI. It is built on top of OpenAI's GPT-3 family of large language models and has been fine-tuned using both supervised and reinforcement learning techniques."

function autoType1(){
    if(i < text1.length){
        cmdOne.innerHTML += text1.charAt(i)
        i+=1
        setTimeout(autoType1, 20)
    }
}
autoType1()

if(cmdOne.innerHTML.length === 12){
    setTimeout(autoType2, 1020)
}

function autoType2(){
    if(j < text2.length){
        
        cmdTwo.innerHTML += (text2.charAt(j)+text2.charAt(j+1)+text2.charAt(j+2)) 
        j+=3
        setTimeout(autoType2, 20)
    }
}

let sectionOne = document.getElementById('section-1') 

function renderStuff(){
    sectionOne.style.opacity = "1"
    sectionOne.style.transition = "opacity 0.7s"   
}

const observerl = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showl')
        }
        else{
            entry.target.classList.remove('showl')
        }
    })
})

const observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showr')
        }
        else{
            entry.target.classList.remove('showr')
        }
    })
})

const observerhead = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showhead')
        }
        else{
            entry.target.classList.remove('showhead')
        }
    })
})

let hiddenElementsLeft = document.querySelectorAll('.hiddenl')
let hiddenElementsRight = document.querySelectorAll('.hiddenr')
let featureHeading = document.querySelectorAll('.heading-sec-2')

hiddenElementsLeft.forEach((el) => observerl.observe(el))
hiddenElementsRight.forEach((el) => observerr.observe(el))
featureHeading.forEach((el) => observerhead.observe(el))