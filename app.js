function setClock() {

    const today = new Date();
    document.getElementById('clock').innerHTML = today.toLocaleTimeString();

    setTimeout(setClock, 1000);

}

function setDate() {

    let date = new Date().toDateString();
    document.querySelector('.date').textContent = date;

}
