var chalk = require('chalk');
var readlineSync=require('readline-sync')
console.log(chalk.bold.green.bgBlack.underline('       CORONA AWARENESS QUIZ      '))

console.log("")
console.log(chalk('In this phase of pandemic we have learnt much about '+	chalk.green.underline.bold(' COVID-19  ') +	" So lets test Your Knowledge"));
console.log("")

console.log(chalk.blue("before it first introduce yourself"))
console.log("")

var userAnswer=readlineSync.question(chalk.white(" :) Whats Your Name? "))
console.log("welcome : " ,chalk.bgRed(userAnswer))
console.log("")
console.log(chalk.bold("-----------lets begin the Quiz----------"))

var score=0;
//function
function play(ques,index){
  var qno = index+1;
  var random = Math.floor((Math.random() * 3) + 0);
  console.log(chalk.blueBright.bgBlack("Q"+qno+" "+ques.question+" "));
   
  var quesarr=[];

  if(random===1){
    quesarr[0]=ques.o1;
    quesarr[1]=ques.o2;
    quesarr[2]=ques.r;
    quesarr[3]=ques.o3;
  } else if(random === 2){
    quesarr[0]=ques.o1;
    quesarr[1]=ques.r;
    quesarr[2]=ques.o2;
    quesarr[3]=ques.o3;
  } else if(random === 3){
    quesarr[0]=ques.r;
    quesarr[1]=ques.o2;
    quesarr[2]=ques.o1;
    quesarr[3]=ques.o3;
  } else{
    quesarr[0]=ques.o1;
    quesarr[1]=ques.o2;
    quesarr[2]=ques.o3;
    quesarr[3]=ques.r;
  }
   for(var i=0;i<quesarr.length;i++){
   console.log(chalk.cyanBright(i+" " +quesarr[i]+""));
   }

   var ans= readlineSync.question("\nchoose the right option. \n ");
   if(quesarr[ans]===QuesNans[n].r){
     console.log(chalk.bgGreen("you are correct"));
     console.log("kya baat");
     console.log("current score: "+(++score)+" \n");
   }
   else{
     console.log(chalk.bgRed("Oops you are wrong "));
     console.log("correct answers is " + QuesNans[n].r)
     console.log("Current score: "+(--score)+" \n");
   }
   console.log(chalk.green("---------------------------------------"));
}
QuesNans=[
{ question:"What does the “19” in “COVID-19” refer to?",
 o1:" There are 19 variants of the coronavirus.",
 o2:" There are 19 symptoms of coronavirus disease.",
 o3:" This is the 19th coronavirus pandemic.",
 r: " The coronavirus and the disease it causes were identified in 2019."
},
{ 
  question:"When is it safe to be closer than 6 feet to another person who is not sick with COVID-19? ",
 o1:" When the person is related to you. ",
 o2:" When you have already had COVID-19. ",
 o3:" When you are outdoors.",
 r: " When the person normally lives with you."
},
{ question:"Which of these is not a common COVID-19 symptom? ",
 o1:" Fever. ",
 o2:" Cough. ",
 o3:" Inability to taste or smell.",
 r: " Blurred vision."
},
{ question:"Staying apart from other people when you have been exposed to the coronavirus is called:",
 o1:"Isolation. ",
 o2:" Quarantine. ",
 r: " Physical distancing.."
},
{ question:"MODERNA vaccine is developed by which country",
  o1:"China",
  o2:"United Kingdom",
  o3:"India",
  r:"United States"
}
]
for(var i=0;i<QuesNans.length;i++){
  var n = i;
  play(QuesNans[i],n);
  }
var high=[{
  name:"Madhav",
  score:"4"
}]
console.log(chalk.inverse("your score : "+score));
console.log(chalk.inverse.bgCyan("high score : "+high[0].score)+"\n");
console.log(chalk.bold("Capture screenshot and send me if you beaten the high score i will update with your score right away"))
console.log(chalk.magenta.bold("Thank you for playing"))
  