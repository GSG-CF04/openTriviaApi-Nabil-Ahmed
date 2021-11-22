let x = fetch("https://opentdb.com/api_category.php")
  .then((res) => {
    if (res.status !== 200) {
      console.log("there was a problem connecting to Api");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    let dataArr = data.trivia_categories;

    dataArr.forEach((category) => {
      let wrapper = document.getElementById("wrapper");
      let cardBox = document.createElement("div");
      cardBox.setAttribute("class", "grid");
      cardBox.setAttribute("id", category["id"]);
      cardBox.setAttribute("onclick", `selcetedCate(${category["id"]})`);

      for (i = 1; i < dataArr.length; i++) {
        if (category.id == 5 * i + 1) {
          cardBox.classList.add("green");
        } else if (category.id == 5 * i + 2) {
          cardBox.classList.add("yellow");
        } else if (category.id == 5 * i + 3) {
          cardBox.classList.add("light-blue");
        } else if (category.id == 5 * i + 4) {
          cardBox.classList.add("dark-blue");
        } else if (category.id == 5 * i + 5) {
          cardBox.classList.add("rosy");
        }
      }

      let p = document.createElement("p");
      p.textContent = category["name"];
      wrapper.appendChild(cardBox);
      cardBox.appendChild(p);
    });
  });


  
function selcetedCate(id) {
  localStorage.setItem('category',id)
  location.href = "quest.html";
}
