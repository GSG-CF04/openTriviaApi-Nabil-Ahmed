let allAnswersArr = [];
let correctAnswers = [];
let answers = [];
let seca = document.getElementById("under");
let index = JSON.parse(localStorage.getItem("category"));

let x = fetch(
  `https://opentdb.com/api.php?amount=10&type=multiple&category=${index}`
)
  .then((res) => {
    if (res.status !== 200) {
      console.log("there was a problem connecting to Api");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    document.querySelector(
      "h2"
    ).innerHTML = `Category: ${data.results[0].category}`;
    document.querySelector(
      "h3"
    ).innerHTML = `Difficulty: ${data.results[0].difficulty}`;

    let dataArr = data.results;

    for (let i = 0; i < dataArr.length; i++) {
      correctAnswers.push(dataArr[i].correct_answer);
      answers = dataArr[i].incorrect_answers;
      answers.splice(getRandomInt(4), 0, dataArr[i].correct_answer);

      allAnswersArr[i] = answers;
    }

    for (let i = 0; i < dataArr.length; i++) {
      const section = document.createElement("section");
      section.setAttribute("class", "card");

      let div1 = document.createElement("div");
      div1.setAttribute("class", "question");

      let para = document.createElement("h1");
      para.innerHTML = `${dataArr[i].question}`;

      let number = document.createElement("span");
      number.setAttribute("class", "color");
      number.innerHTML = i + 1;

      let div2 = document.createElement("div");
      div2.setAttribute("class", "choices");

      for (m = 0; m < allAnswersArr[i].length; m++) {
        let btn = document.createElement("input");
        btn.setAttribute("id", `group${i}${m}`);
        btn.setAttribute("type", "radio");
        btn.setAttribute("name", `choice${i}`);
        btn.setAttribute("value", `${allAnswersArr[i][m]}`);

        let label = document.createElement("label");
        label.setAttribute("for", `group${i}${m}`);
        label.textContent = `${allAnswersArr[i][m]}`;

        div2.appendChild(btn);
        div2.appendChild(label);
      }

      if (i == 1 || i == 4 || i == 7) {
        div1.classList.add("orange");
        number.classList.add("sec-orange");
      } else if (i == 2 || i == 5 || i == 8) {
        div1.classList.add("green");
        number.classList.add("sec-green");
      }

      let mybr = document.createElement("br");

      div2.appendChild(mybr);

      div1.appendChild(number);
      div1.appendChild(para);

      section.appendChild(div1);
      section.appendChild(div2);
      seca.appendChild(section);
    }
  });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(correctAnswers);

function showMarks() {
  let counter = 0;
let name = localStorage.getItem('name')
  for (i = 0; i < 10; i++) {

    for (m = 0; m < 4; m++) {
      let radio = document.getElementById(`group${i}${m}`);
      if (radio.checked == true && radio.value == correctAnswers[i]) {
        console.log(radio.value)
        counter++;
      }
    }

  }

  alert(`Your score is ${counter} out of 10, ${name}`);
}
