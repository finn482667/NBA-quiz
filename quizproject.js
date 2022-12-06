let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "What is Kobe Bryant's highest scoring game? ",
	"a": "81 pts",
	"b": "8 pts",
	"c": "68 pts",
	"d": "101 pts",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   },
   {
	"question": "Who has the most NBA championships of all time?",
	"a": "Joe Ingles",
	"b": "Tim Duncan",
	"c": "Bill Russel",
	"d": "Micheal Jordan",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
      "question": "Who has scored the most points in there carrer?",
      "a": "Lebron James",
      "b": "Kareem Abdul-Jabbar",
      "c": "Stephen Curry",
      "d": "Wilt Chamberlain",
      "image":"quizimages/q3.jpg",
      "answer": "b"
      },
      {
         "question": "Which NBA franchise has the most championships?",
         "a": "Chicago bulls",
         "b": "Brooklyn Nets",
         "c": "The Boston Celtics",
         "d": "Los Angeles Lakers",
         "image":"quizimages/q4.jpg",
         "answer": "c"
         },
   {
      "question": "What is the average height in the NBA?",
      "a": "6,2 ft",
      "b": "6 ft",
      "c": "6,7 ft",
      "d": "6,6 ft",
      "image":"quizimages/manute.jpg",
      "answer": "d"
   },
   {
      "question": "Which NBA player has a nick name 'the dream'?",
      "a": "Kevin Durant",
      "b": "Lebron James",
      "c": "Shaquile O'neal",
      "d": "Hakeem Olajuwon",
      "image":"quizimages/paul.jpg",
      "answer": "c"
   },
   {
      "question": "Who was the first overall pick in the 2011 draft?",
      "a": "Lamelo Ball",
      "b": "Kyrie Irving",
      "c": "Lebron James",
      "d": "Kahwi Leonard",
      "image":"quizimages/KD.jpg",
      "answer": "c"
   },   {
      "question": "Who has the most total assists in NBA history?",
      "a": "John Stockton",
      "b": "Chris Paul",
      "c": "Lebron james",
      "d": "Isiah Thomas",
      "image":"quizimages/q2.jpg",
      "answer": "a"
   },
   {
      "question": "How many games do NBA teams play in the regular season?",
      "a": "42",
      "b": "84",
      "c": "81",
      "d": "82",
      "image":"quizimages/q2.jpg",
      "answer": "d"
   },
   {
      "question": "What NBA team has never won a championship?",
      "a": "The Los Angles Lakers",
      "b": "The Timberwolves",
      "c": "The Toronto Raptors",
      "d": "The Golden State Warriors",
      "image":"quizimages/q2.jpg",
      "answer": "b"
   },
   {
      "question": "Who is the only NBA player born in canada that has won a MVP?",
      "a": "Shai-Gilgous Alexander",
      "b": "Andrew Wiggins",
      "c": "Steve Nash",
      "d": "Tristan Thombson",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   }
 ];
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 
 
 
 
   
