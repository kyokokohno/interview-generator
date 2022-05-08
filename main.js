import { med_lst, law_lst } from "./questions.js";

document.getElementById("askbutton").addEventListener("click", questionGen);
document
  .getElementById("interviewtype")
  .addEventListener("change", questionGen);

questionGen(); //calls instantly

function questionGen() {
  const interview_type = document.getElementById("interviewtype").value; // not a reference
  let title = document.getElementById("typeTitle"); //reference
  if (interview_type == "medical") {
    questionAsk(med_lst);
    title.textContent = "Medical School Interview Questions";
  } else if (interview_type == "law") {
    questionAsk(law_lst);
    title.textContent = "Law School Interview Questions";
  }
}

function questionAsk(lst) {
  const n = Math.floor(Math.random() * lst.length);
  document.getElementById("question").textContent = lst[n];
}

// if you need to trouble shoot go to inspect element and type: console.log(n, Math.random(),lst[n]);

//selected index
//selected options
//

//function: document.getElementById("question").textContent = lst[n]
//let questionDiv = document.getElementById("question");
//questionDiv.textContent = "boobard";
//console.log("booba")
