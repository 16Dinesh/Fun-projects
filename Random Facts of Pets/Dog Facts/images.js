let img = "https://dog.ceo/api/breeds/image/random";
let factapi = 'https://dog-api.kinduff.com/api/facts';
let para = document.getElementById('fact');
let btn = document.querySelector('button');
let randImg = document.getElementById('Randimg');

btn.addEventListener('click' , async () => {
    let facts = await getFacts();
    // console.log(facts);
    para.innerText = facts;
    let img = await getImg();
    randImg.setAttribute("src", img)
})

async function getImg() {
    try {
        let responce = await axios.get(img);
        return responce.data.message
    }
    catch (e) {
        console.log(`Error -- - ${e}`);
        return `No Image found `;
    }
}

async function getFacts() {
    try {
        let responce = await axios.get(factapi);
        return responce.data.facts;
        // console.log(responce);
    }
    catch (e) {
        console.log(`Error -- ${e}`);
        return "No Fact found"
    }
}

