const questions = [
   { id: 1, text: "How satisfied are you with our products?", type: "rating", options:5 },
   { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", options: 5 },
   { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", options:5},
   { id: 4, text: "On a scale of 1-10, how would you recommend us to your friends and family?", type: "rating", options: 10 },
   { id: 5, text: "What could we do to improve our service?", type: "text", options: "text" }
 ]

let currentQuesIndex=0
let answers=[]

var startBtn=document.querySelector(".btn")
var  welcome=document.querySelector(".welcome-page")
var  survey=document.querySelector(".survey")
var  quesText=document.querySelector(".ques")
var  nextButton=document.querySelector(".nextButton")
var  previousButton=document.querySelector(".previousButton")
var queNo = document.querySelector(".question_num")

function displayQuestion(){
   const ques=questions[currentQuesIndex];
   quesText.textContent=currentQuesIndex+1+".) "+ ques.text
   queNo.textContent = `${currentQuesIndex + 1}/${questions.length} `
   let cInputn = document.querySelectorAll(".circle-input")
   if(ques.type === 'text'){
      cInputn.forEach(element => {
         element.style.display = "none"
      });
      document.getElementById("text-input").style.display="block"
      document.getElementById("rating-class2").style.display="none"
   }
   else if(ques.type=='rating' && ques.options==10){
      document.getElementById("text-input").style.display="none"
      cInputn.forEach(element => {
         element.style.display = "block"
      });
      
      document.getElementById("rating-class2").style.display="flex"
      
      
   }
   else{
      document.getElementById("text-input").style.display="none"
      cInputn.forEach(element => {
         element.style.display = "block"
      });
      document.getElementById("rating-class2").style.display="none"
      
   }
}

function saveAnswer(){
   const ques=questions[currentQuesIndex]
   var ratingButtons=document.querySelectorAll(".circle-input");
   let selectedValue;
   console.log(ratingButtons)

}

function changeHandler(){
   let x=document.getElementsByClassName("circle-input")
   for(let i=0;i<x.length;i++){
      if(document.activeElement===x[i]) console.log(i+1)
   }

}


startBtn.addEventListener("click",()=>{
   welcome.style.display="none"
   survey.style.display="block"
   displayQuestion()
})

nextButton.addEventListener("click",()=>{
   // getselectedAns()
   currentQuesIndex++;
   if(currentQuesIndex<questions.length) displayQuestion()
   else currentQuesIndex=questions.length-1
})
previousButton.addEventListener("click",()=>{
   // saveAnswer()
   currentQuesIndex--;
   if(currentQuesIndex>=0){
       displayQuestion();
   }
   else currentQuesIndex=0;
   
})



 

