//*C++ pre,Submit,nxt button css on-load----Using Jquery
const bodyload = ()=>{
    $("#pre , #pre2, #pre3").css("display","none");
    $("#btn, #btn2, #btn3, #nxt, #nxt2, #nxt3").css({"margin-left":"20px", "width": "45%"});

    openNav();
}


//**BODY-SCROLL->navbar GAYAB */
function changeCss () {
  var b = document.getElementById("mySidebarr").style.width = "300px";
 if(this.scrollY>50) {

  const closeNav = ()=>
  {
    $("#mySidebarr").css("width","0px");
  }
  closeNav();
 }else
 {
 return b;
 }
											 
}
window.addEventListener("scroll", changeCss , false);


//**body On-load, sidebar open rehna chahiye
function openNav() {
  $("#mySidebarr").css("width","300px"); 
}


//***C++ Questions
const questions = [{
  'que': 'Identify the correct extension of the user-defined header file in C++ ?',
  'A': '.CPP',
  'B': '.PY',
  'C': '.EXE',
  'D': '.ZB',
  'currect': 'A'
},
{
  'que': 'Which of the following data type is supported in C++ but not in C ?',
  'A': 'Int',
  'B': 'Bool',
  'C': 'Double',
  'D': 'Float',
  'currect': 'B'
},
{
  'que': 'Identify the correct syntax for declaring arrays in C++ ?',
  'A': 'Array arr[10]',
  'B': 'Array{10}',
  'C': 'Int arr[10]',
  'D': 'Int arr',
  'currect': 'C',
},
{
  'que': 'Which of the following is “address of operator”?',
  'A': '*',
  'B': '&',
  'C': '[]',
  'D': '&&',
  'currect': 'B',
},
{
  'que': 'Identify the correct example for a pre-increment operator ?',
  'A': '++n',
  'B': 'n++',
  'C': '--n',
  'D': 'n+',
  'currect': 'A',
},
{
  'que': 'Identify the scope resolution operator.?',
  'A': ':',
  'B': '::',
  'C': '?',
  'D': 'none',
  'currect': 'B',
},
{
  'que': 'Identify the correct definition of \'*\' operator in pointer.?',
  'A': 'Address of operator',
  'B': 'Value of address operator',
  'C': 'Multiplication operator',
  'D': 'All of above',
  'currect': 'B',
},
{
  'que': 'Choose the correct default return value of function.?',
  'A': 'int',
  'B': 'void',
  'C': 'char',
  'D': 'float',
  'currect': 'A',
},
{
  'que':  'Choose the correct option which is mandatory in a function.?',
  'A': 'return_type',
  'B': 'parameters',
  'C': 'function_name',
  'D': 'Both a and c',
  'currect': 'D',
},
]



//**java ke question 

const questions2 = [{
  'que2': 'What is a correct syntax to output "Hello World" in Java??',
  'A': 'echo("Hello World");',
  'B': 'print ("Hello World");',
  'C': 'System.out.println("Hello World");',
  'D': 'Console.WriteLine("Hello World");',
  'currect2': 'C'
},
{
  'que2': 'Which of the below is valid way to code an array in java?',
  'A': 'int myArray [] = {1, 3, 5};',
  'B': 'int myArray [] [] = {1,2,3,4};',
  'C': 'int [] myArray = (5, 4, 3);',
  'D': 'int [] myArray = {“1”, “2”, “3”};',
  'currect2': 'A'
},
{
  'que2': 'Which of the following is not a keyword in java?',
  'A': 'static',
  'B': 'Boolean',
  'C': 'void',
  'D': 'private',
  'currect2': 'B',
},
{
  'que2': 'What is the size of short variable?',
  'A': '8 bit',
  'B': '16 bit',
  'C': '32 bit',
  'D': '64 bit',
  'currect2': 'B',
},
{
  'que2': 'What is the default value of float variable?',
  'A': '0.0d',
  'B': ' 0.0f',
  'C': '0',
  'D': 'not defined',
  'currect2': 'B',
},
{
  'que2': 'which operator is considered to be with highest precedence?',
  'A': '() , []',
  'B': '=',
  'C': '?:',
  'D': '%',
  'currect2': 'A',
},
{
  'que2': 'What is the full-form of JDK?',
  'A': 'Java deployment kit',
  'B': 'java development',
  'C': 'java development kit',
  'D': 'java departmant kill',
  'currect2': 'C',
},
{
  'que2': 'What is the purpose of JIT compiler?',
  'A': 'Compilers need high memory usage.',
  'B': 'Compiling bytecodes into native machine',
  'C': 'Like run-time interpreter',
  'D': 'JIT Compiler internal working',
  'currect2': 'B',
},
{
  'que2': 'what you think about Unicode?',   
  'A': 'Create a character variable.',
  'B': 'Unicode is unify different language encoding',
  'C': 'universal international standard character encoding',
  'D': 'integrate different language programming',
  'currect2': 'C',
},
]


//**javascript ke question

const questions3 = [{
  'que3': 'Is JavaScript case-sensitive?',
  'A': 'No',
  'B': 'Yes',
  'C': 'Maybe',
  'D': 'none',
  'currect3': 'B',
},
{
  'que3': 'Where is the correct place to insert a JavaScript?',
  'A': 'The <body> section',
  'B': 'The <head> section',
  'C': 'Both the <head> section and the <body> section are correct ',
  'D': 'Out of <head> Section',
  'currect3': 'C'
},
{
  'que3': 'How do you write "Hello World" in an alert box?',
  'A': 'alert("Hello World");  ',
  'B': 'msgBox("Hello World");',
  'C': 'msg("Hello World");',
  'D': 'alertBox("Hello World");',
  'currect3': 'A',
},
{
  'que3': 'How do you create a function in JavaScript?',
  'A': 'function myFunction() ',
  'B': 'function:myFunction() ',
  'C': 'function = myFunction()',
  'D': 'function() = myfunction;',
  'currect3': 'A',
},
{
  'que3': 'How do you find the number with the highest value of x and y?',
  'A': 'Math.ceil(x, y)',
  'B': 'top(x, y)',
  'C': 'ceil(x, y)',
  'D': 'Math.max(x, y)',
  'currect3': 'D',
},
{
  'que3': 'How can you detect the client\'s browser name?',
  'A': 'navigator.appName  ',
  'B': 'browser.name',
  'C': 'client.navName',
  'D': 'web-Server',
  'currect3': 'A',
},
{
  'que3': 'Which event occurs when the user clicks on an HTML element?',
  'A': 'onmouseover',
  'B': 'onmouseclick',
  'C': 'onchange',
  'D': 'onclick ',
  'currect3': 'D',
},
{
  'que3': 'How do you declare a JavaScript variable?',
  'A': 'var carName;',
  'B': 'v carName;',
  'C': 'variable carName;',
  'D': 'vari carName',
  'currect3': 'A',
},
{
  'que3': 'What is the correct JavaScript syntax to change the content of the HTML element below?',
  'A': 'document.getElementById("demo").innerHTML = "Hello World!";',
  'B': '#demo.innerHTML = "Hello World!";',
  'C': 'document.getElement("p").innerHTML = "Hello World!";',
  'D': 'document.getElementByName("p").innerHTML = "Hello World!";',
  'currect3': 'A'
},
]


//** C++ Qestion load 
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("quebox")
const optioninputs = document.querySelectorAll(".options")

const loadQuestions = ()=> {
  if(index===total){   
    return endquiz();
  }
  reset();
  const data = questions[index];
  quesbox.innerHTML = `${index+1}) ${data.que}`; 

  optioninputs[0].nextElementSibling.innerText = data.A;  
  optioninputs[1].nextElementSibling.innerText = data.B;
  optioninputs[2].nextElementSibling.innerText = data.C;
  optioninputs[3].nextElementSibling.innerText = data.D;
}


//** Java question load */
let index2 = 0;
let total2 = questions2.length;
let right2 = 0, wrong2 = 0;
const quesbox2 = document.getElementById("quebox2")
const optioninputs2 = document.querySelectorAll(".options2")

const loadQuestions2 = ()=> {
  if(index2===total2){   
    return endquiz2();
  }
  reset2();
  const data2 = questions2[index2];
  quesbox2.innerHTML = `${index2+1}) ${data2.que2}`; 

  optioninputs2[0].nextElementSibling.innerText = data2.A;  
  optioninputs2[1].nextElementSibling.innerText = data2.B;
  optioninputs2[2].nextElementSibling.innerText = data2.C;
  optioninputs2[3].nextElementSibling.innerText = data2.D;
}


//**  javascript question load */
let index3 = 0;
let total3 = questions3.length;
let right3 = 0, wrong3 = 0;
const quesbox3 = document.getElementById("quebox3")
const optioninputs3 = document.querySelectorAll(".options3")

const loadQuestions3 = ()=> {
  if(index3===total3){   
    return endquiz3();
  }
  reset3();
  const data3 = questions3[index3];
  quesbox3.innerHTML = `${index3+1}) ${data3.que3}`; 

  optioninputs3[0].nextElementSibling.innerText = data3.A;  
  optioninputs3[1].nextElementSibling.innerText = data3.B;
  optioninputs3[2].nextElementSibling.innerText = data3.C;
  optioninputs3[3].nextElementSibling.innerText = data3.D;
}


//****************************************PREVIOUS************************************ */



//***c++ ka Previous button*/
const previous = ()=>{
  if(right>0){
     right--
  }else{
    wrong--
  }


  function myFunction(x) {
    if (x.matches) { // If media query matches

       //resize buttons 
    $("#btn").css({"margin-left":"0px" ,"width":"30%"});
    $("#pre").css({"width":"30%" , "margin-left":"5px"});
    document.getElementById("nxt").style.cssText = "visibility: visible; width: 30% ";


    } else {
      //resize buttons 
    $("#btn").css({"margin-left":"0px" ,"width":"32%"});
    $("#pre").css({"width":"32%" , "margin-left":"10px"});
    document.getElementById("nxt").style.cssText = "visibility: visible; width: 32% ";
    }

  }
  
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)


  if(index===0){
     bodyload(); // agar previous ka index 0 hogaya toh pre-buttons gayab ho jayenge
  }else{
    index--;
  }
  loadQuestions();
  return;
}

//*java ka pre button 
const previous2 = ()=>{

  if(right2>0){
     right2--
  }else{
    wrong2--
  }

  function myFunction(x) {
    if (x.matches) { // If media query matches
        //resize buttons 
  $("#btn2").css({"margin-left":"0px" ,"width":"30%"});
  $("#pre2").css({"width":"30%" , "margin-left":"10px"});
  document.getElementById("nxt2").style.cssText = "visibility: visible; width: 30% ";
    } else {
       //resize buttons 
  $("#btn2").css({"margin-left":"0px" ,"width":"32%"});
  $("#pre2").css({"width":"32%" , "margin-left":"10px"});
  document.getElementById("nxt2").style.cssText = "visibility: visible; width: 32% ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  if(index2===0){
        document.getElementById("pre2").style.visibility = "hidden"; //*pre button GAYAB
        bodyload(); // agar previous ka index 0 hogaya toh buttons pehle jese ho jayenge

  }else{
    index2--;
  }
  loadQuestions2();
  return;
}

//**javascript ka pre button */
const previous3 = ()=>{

  if(right3>0){
     right3--
  }else{
    wrong3--
  }


  function myFunction(x) {
    if (x.matches) { // If media query matches
       //resize buttons 
        $("#btn3").css({"margin-left":"0px" ,"width":"30%"});
        $("#pre3").css({"width":"30%" , "margin-left":"10px"});
        document.getElementById("nxt3").style.cssText = "visibility: visible; width: 30% ";
    } else {
      //resize buttons 
      $("#btn3").css({"margin-left":"0px" ,"width":"32%"});
      $("#pre3").css({"width":"32%" , "margin-left":"10px"});
      document.getElementById("nxt3").style.cssText = "visibility: visible; width: 32% ";    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  if(index3===0){
        document.getElementById("pre3").style.visibility = "hidden"; //*pre button GAYAB
        bodyload(); // agar previous ka index 0 hogaya toh buttons pehle jese ho jayenge

  }else{
    index3--;
  }
  loadQuestions3();
  return;
}


//******************************************SUBMIT************************************/

//****c++ Submit button */
const submitquiz = ()=>{

  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#btn").css({"margin-left":"0px", "width":"30%"});
      $("#nxt").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#btn").css({"margin-left":"0px", "width":"32%"});
  $("#nxt").css({"margin-left":"0px", "width":"32%"});
  document.getElementById("pre").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
  const data = questions[index];
  const ans = getans()
  if(ans === data.currect){ 
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestions();
  return;
}

//*java ka submit button
const submitquiz2 = ()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#btn2").css({"margin-left":"0px", "width":"30%"});
      $("#nxt2").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre2").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#btn2").css({"margin-left":"0px", "width":"32%"});
      $("#nxt2").css({"margin-left":"0px", "width":"32%"});
      document.getElementById("pre2").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  const data2 = questions2[index2];
  const ans2 = getans2()
  if(ans2 === data2.currect2){ 
    right2++;

  }else{
    wrong2++;
  }
  index2++;
  loadQuestions2();
  return;
}

//**javascript ka submit button */
const submitquiz3 = ()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#btn3").css({"margin-left":"0px", "width":"30%"});
      $("#nxt3").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre3").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#btn3").css({"margin-left":"0px", "width":"32%"});
  $("#nxt3").css({"margin-left":"0px", "width":"32%"});
  document.getElementById("pre3").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }

  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
  const data3 = questions3[index3];
  const ans3 = getans3()
  if(ans3 === data3.currect3){ 

    right3++;

  }else{
    wrong3++;
  }
  index3++;
  loadQuestions3();
  return;
}



//************************************NEXT************************************* */

//***c++ Next button */
const next = ()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#nxt").css({"margin-left":"0px", "width":"30%"});
      $("#btn").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#nxt").css({"margin-left":"0px", "width":"32%"});
      $("#btn").css({"margin-left":"0px", "width":"32%"});
      document.getElementById("pre").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
  if(index==(total-1)){
    //.............
    $("#nxt").css("display","none");
    $("#pre, #btn").css({"width":"45%", "margin-left":"20px"})
  }
    else{
   index++;
   loadQuestions();
  }
  return;
}

//**java Next button */
const next2 = ()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#nxt2").css({"margin-left":"0px", "width":"30%"});
      $("#btn2").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre2").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#nxt2").css({"margin-left":"0px", "width":"32%"});
  $("#btn2").css({"margin-left":"0px", "width":"32%"});
  document.getElementById("pre2").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  if(index2==(total2-1)){
    //.............
    $("#nxt2").css("display","none");
    $("#pre2, #btn2").css({"width":"45%", "margin-left":"20px"})
  }
    else{
   index2++;
   loadQuestions2();
  }
  return;
}

//**javascript Next button */
const next3 = ()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $("#nxt3").css({"margin-left":"0px", "width":"30%"});
      $("#btn3").css({"margin-left":"0px", "width":"30%"});
      document.getElementById("pre3").style.cssText = "visibility: visible; width: 30%; margin-left: 10px; ";
    } else {
      $("#nxt3").css({"margin-left":"0px", "width":"32%"});
      $("#btn3").css({"margin-left":"0px", "width":"32%"});
      document.getElementById("pre3").style.cssText = "visibility: visible; width: 32%; margin-left: 10px; ";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  if(index3==(total3-1)){
    //.............
    $("#nxt3").css("display","none");
    $("#pre3, #btn3").css({"width":"45%", "margin-left":"20px"})
  }
    else{
   index3++;
   loadQuestions3();
  }
  return;
}


//**c++ Answers*/
const getans = ()=>
{
  let answer;
  optioninputs.forEach(
    (input)=>{
      if(input.checked){
             answer = input.value;
                 }
    }
  )
  return answer;
}

//**java Answers*/
const getans2 = ()=>
{
  let answer;
  optioninputs2.forEach(
    (input)=>{
      if(input.checked){
             answer = input.value;
                 }
    }
  )
  return answer;
}

//**javascript answers */
const getans3 = ()=>
{
  let answer;
  optioninputs3.forEach(
    (input)=>{
      if(input.checked){
             answer = input.value;
                 }
    }
  )
  return answer;
}


//c++ 
const reset = ()=> {
  optioninputs.forEach(
    (input)=>{
      input.checked = false;
    }
  )
}


//java 
const reset2 = ()=> {
  optioninputs2.forEach(
    (input)=>{
      input.checked = false;
    }
  )
}

//javascript
const reset3 = ()=> {
  optioninputs3.forEach(
    (input)=>{
      input.checked = false;
    }
  )
}


//******************Quiz End page - total marks ******************/

//c+++
const endquiz = ()=>{
  document.getElementById("box").innerHTML = `
  <div style = "text-align: center">
  <h3>Thank your for playing the quiz</h3>
  <h2>${right} / ${total} are currect</h2>
  </div>
  `
  $("#box").addClass("lastquiz")

}

//java
const endquiz2 = ()=>{
  document.getElementById("box2").innerHTML = `
  <div style = "text-align: center">
  <h3>Thank your for playing the quiz</h3>
  <h2>${right2} / ${total2} are currect</h2>
  </div>
  `
    $("#box2").addClass("lastquiz")

}

//javascript
const endquiz3 = ()=>{
  document.getElementById("box3").innerHTML = `
  <div style = "text-align: center">
  <h3>Thank your for playing the quiz</h3>
  <h2>${right3} / ${total3} are currect</h2>
  </div>
  `
    $("#box3").addClass("lastquiz")


}


// this is initial call
loadQuestions(); //c++ question load

loadQuestions2(); //java question load

loadQuestions3(); //javascript question load








