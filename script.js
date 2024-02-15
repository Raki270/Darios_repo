//Getting the buttons from the document
let eurBtn = document.getElementById("EurBtn");
let engBtn = document.getElementById("EngBtn");
let mkdBtn = document.getElementById("MkdBtn");
let input = document.getElementById("input");
let search = document.getElementById("search");
let reset = document.getElementById("reset");
let result = document.getElementById("resultContainer");
let container = document.getElementById("container");
async function caller(country){
    try{
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        let data = await response.json();
        result.innerHTML = ``;
        container.style.backgroundColor = `aliceblue`;
        for(let i = 0; i < data.length; i++){
            result.innerHTML += `
        <div style="background-color: rgb(0, 0, 255, 0.3); margin-left: 15px; margin-right: 15px; border: 1px solid blue; border-radius: 25px;">
        <img src="${data[i].flags.png}" alt="" style="width: 100%; height: 200px; border-radius: 25px">
        <p style="color: white;text-align: center; font-weight: 700">${data[i].name.common}</p>
        <p style="color: white; padding: 10px">${data[i].name.common} is country with population of ${data[i].population} with the capital city of ${data[i].capital[0]}.</p>
        </div>`;
        }
    }
    catch(error){console.error(`Something is wrong with calling the function: ${error}`)}
    finally{
        let time = new Date();
        console.log(`The function is called at ${time}`)
    }
};
mkdBtn.addEventListener("click", () =>{
    caller("macedonia");
});
search.addEventListener("click", () =>{
    caller(input.value);
});
reset.addEventListener("click", () => {
    input.value = "";
    result.innerHTML = "";
    container.style.backgroundColor = `white`;
});
let countryes = [];
async function defaultCaller(){
    let response = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await response.json();
    for(let i = 0; i < data.length; i++){
        countryes.push(data[i]);
    }
};