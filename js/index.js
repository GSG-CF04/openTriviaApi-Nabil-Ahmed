function setUserName() {
    let name = document.getElementById('name-input').value
    if (name.length > 0){
    localStorage.setItem('name',name)
    location.href = 'categories.html';
    }
    else {
        window.alert('please enter your name')
    }
}
