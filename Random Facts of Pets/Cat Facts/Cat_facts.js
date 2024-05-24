let url = "https://catfact.ninja/fact";
let img = 'https://api.thecatapi.com/v1/images/search'
let para = document.getElementById('fact');
let btn = document.querySelector('button');
let randImg = document.getElementById('randImg');


btn.addEventListener('click' , async () => {
    let facts = await getFacts();
    console.log(facts);
    para.innerText = facts;
    let img = await getImg();
    randImg.setAttribute("src" , img);

})


async function getImg() {
    try {
        let responce = await axios.get(img);
        // console.log(responce.data[0].url);
        return responce.data[0].url;
    }
    catch (e) {
        console.log(`error -- ${e}`);
        return 'No image found'
    }
}


async function getFacts() {
    try {
        let responce = await axios.get(url);
        return responce.data.fact;
    }
    catch (e) {
        console.log(`Error -- ${e}`);
        return "No Fact found"
    }
}

