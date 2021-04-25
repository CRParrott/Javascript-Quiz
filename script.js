var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

var questions = [
  {
    question: "Who invented Javascript?",
    a: "Douglas Crockford",
    b: "Brendan Eich",
    c: "Sheryl Sandberg",
    d: "Einstein",
    answer: "B"
  },
  {
    question: "Which one of these is a Javascript package manager?",
    a: "Typescript",
    b: "Node.js",
    c: "npm",
    d: "Bootstrap",
    answer: "C"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    a: "jQuery",
    b: "RequireJS",
    c: "Angular",
    d: "ESLint",
    answer: "D"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The head section",
    b: "Both the head section and the body section are correct",
    c: "The body section",
    d: "The footer",
    answer: "B"
  }
];

function get(x){
  return document.getElementById(x);
}

  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      pos = 0;
      correct = 0;
      return false;
    }

    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;

    test.innerHTML = "<h3>"+question+"</h3>";

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }

  function checkAnswer(){
   choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
    choice = choices[i].value;
    }
  }

    if(choice == questions[pos].answer){
      correct++;
    }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);

