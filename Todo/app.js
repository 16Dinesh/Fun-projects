
let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

function addTask() {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete');

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";    // make empty str in placeholder makes empty after add task
}

btn.addEventListener('click', function() {
    if (inp.value.trim() !== "") {
        addTask();
    }
});

// enter to list
inp.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && inp.value.trim() !== "") {
        addTask();
    }
});

//to delete buttons
ul.addEventListener('click', function(e) {
    if (e.target.nodeName == 'BUTTON') {
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
});




