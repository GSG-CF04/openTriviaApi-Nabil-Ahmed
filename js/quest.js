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

      let btn1 = document.createElement("input");
      btn1.setAttribute("id", `choice1${i}`);
      btn1.setAttribute("type", "radio");
      btn1.setAttribute("name", `choice${i}`);

      let label1 = document.createElement("label");
      label1.setAttribute("for", `choice1${i}`);
      label1.innerHTML = `${dataArr[i].correct_answer}`;

      let btn2 = document.createElement("input");
      btn2.setAttribute("id", `choice2${i}`);
      btn2.setAttribute("type", "radio");
      btn2.setAttribute("name", `choice${i}`);

      let label2 = document.createElement("label");
      label2.setAttribute("for", `choice2${i}`);
      label2.innerHTML = `${dataArr[i].incorrect_answers[0]}`;

      let btn3 = document.createElement("input");
      btn3.setAttribute("id", `choice3${i}`);
      btn3.setAttribute("type", "radio");
      btn3.setAttribute("name", `choice${i}`);

      let label3 = document.createElement("label");
      label3.setAttribute("for", `choice3${i}`);
      label3.innerHTML = `${dataArr[i].incorrect_answers[1]}`;

      let btn4 = document.createElement("input");
      btn4.setAttribute("id", `choice4${i}`);
      btn4.setAttribute("type", "radio");
      btn4.setAttribute("name", `choice${i}`);

      let label4 = document.createElement("label");
      label4.setAttribute("for", `choice4${i}`);
      label4.innerHTML = `${dataArr[i].incorrect_answers[2]}`;

      let mybr = document.createElement("br");

      if (i == 1 || i == 4 || i == 7) {
        div1.classList.add("orange");
        number.classList.add("sec-orange");
      } else if (i == 2 || i == 5 || i == 8) {
        div1.classList.add("green");
        number.classList.add("sec-green");
      }
      div1.appendChild(number);

      div1.appendChild(para);

      div2.appendChild(btn1)
      div2.appendChild(label1)
      div2.appendChild(btn2)
      div2.appendChild(label2)
      div2.appendChild(btn3)
      div2.appendChild(label3)
      div2.appendChild(btn4)
      div2.appendChild(label4)
      div2.appendChild(mybr);


      section.appendChild(div1);
      section.appendChild(div2);
      seca.appendChild(section);

    }
  });
