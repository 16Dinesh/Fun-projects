// let h1 = document.querySelector("h1");
// let inp = document.querySelector("input");
// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// btn.addEventListener('click' , function () {
//    let item = document.createElement('li');
//    item.innerText = inp.value;

//     let delbtn = document.createElement('button');
//     delbtn.innerText = 'Delete';
//     delbtn.classList.add('delete');


//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     inp.value = ""           // make empty str in placeholder makes emply after add task
// });

// //event Delegation
// ul.addEventListener('click' , function(e) {
//     // console.dir(e.target.nodeName);
//     if (e.target.nodeName == 'BUTTON'){
//         let listItem = e.target.parentElement;
//         listItem.remove();
//         console.log(`deleted`)

//     }
// });

// // let delbtns = document.querySelectorAll('.delete');
// // for (delbtn of delbtns){
// //     delbtn.addEventListener('click' , function () {
// //         let par = this.parentElemnt;
// //         console.log(par)
// //         par.remove();
// //     })
// // }


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
    inp.value = "";    // make empty str in placeholder makes emply after add task
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

// Event Delegation for delete buttons
ul.addEventListener('click', function(e) {
    if (e.target.nodeName == 'BUTTON') {
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
});





