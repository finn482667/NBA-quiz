let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "What is Kobe Bryant's highest scoring game? ",
	"a": "81 pts",
	"b": "8 pts",
	"c": "68 pts",
	"d": "101 pts",
	"image":"quizimages/KobeDunk.jpg",
	"answer": "a"
   },
   {
	"question": "Who has the most NBA championships of all time?",
	"a": "Joe Ingles",
	"b": "Tim Duncan",
	"c": "Bill Russel",
	"d": "Micheal Jordan",
	"image":"quizimages/joeingles.jpg",
	"answer": "c"
   },
   {
      "question": "Who has scored the most points in there carrer?",
      "a": "Lebron James",
      "b": "Kareem Abdul-Jabbar",
      "c": "Stephen Curry",
      "d": "Wilt Chamberlain",
      "image":"quizimages/kobejorda.jpg",
      "answer": "b"
      },
      {
         "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
         "a": "The Ferengi",
         "b": "The Cardassians",
         "c": "The Borg",
         "d": "The Romulans",
         "image":"quizimages/q2.jpg",
         "answer": "c"
         },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
      "question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
      "a": "The Ferengi",
      "b": "The Cardassians",
      "c": "The Borg",
      "d": "The Romulans",
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
 
 
 
 
 
 
 
 
 
 
 
 
   
