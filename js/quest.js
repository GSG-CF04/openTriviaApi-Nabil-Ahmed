
let index = JSON.parse(localStorage.getItem("items"));
let x = fetch(`https://opentdb.com/api.php?amount=10&type=multiple&category=15`)
  .then((res) => {
    if (res.status !== 200) {
      console.log("there was a problem connecting to Api");
    } else {
      return res.json();
    }
  })

  .then((data) => {
    document.querySelector("h2").innerText = `Category: ${data.results[0].category}`;
    document.querySelector("h3").innerText = `Difficulty: ${data.results[0].difficulty}`;

    let dataArr = data.results;
    
   
    for(let i=0; i<dataArr.length;i++){

      let section = document.createElement("section");
      section.setAttribute("class", "card");

      let div1 = document.createElement("div");
      div1.setAttribute("class", "question");

      let question = document.createElement("h1");
      question.innerHTML = `${data.result[i].question}`

      let number = document.createElement("span");
      number.setAttribute("class", "color");
      number.innerHTML = i+1
      
      let div2 = document.createElement("div");
      div2.setAttribute("class", "choices");
      let btn1 = document.createElement("input");
      btn1.setAttribute("id", `choice1${i}`);



      if (i == 1 || i == 4 || i == 7 ) {
        cardBox.classList.add("green");
      } else if (i == 2 || i == 5 || i == 8) {
        cardBox.classList.add("yellow");
      } 
     
    }
    })
  
