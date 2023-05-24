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


function displayQuestion(){
   const ques=questions[currentQuesIndex];
   quesText.textContent=currentQuesIndex+1+".) "+ ques.text

}

function saveAnswer(){
   const ques=questions[currentQuesIndex]
   var ratingButtons=document.querySelectorAll(".circle-input");
   let selectedValue;
   console.log(ratingButtons)

   //  console.log(selectedValue)
   // var ans=[];
   // ans.push({"question_id":ques.id,"user_answer":userAns.nodeValue})
   // console.log(ans)
}


startBtn.addEventListener("click",()=>{
   welcome.style.display="none"
   survey.style.display="block"
   displayQuestion()
})

nextButton.addEventListener("click",()=>{
   saveAnswer()
   currentQuesIndex++;
   if(currentQuesIndex<questions.length) displayQuestion()
   else currentQuesIndex=questions.length-1
})
previousButton.addEventListener("click",()=>{
   saveAnswer()
   currentQuesIndex--;
   if(currentQuesIndex>=0){
       displayQuestion();
   }
   else currentQuesIndex=0;
   
})

