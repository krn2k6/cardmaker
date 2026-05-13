let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let body = document.querySelector("#body");


form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    // console.log(inputs[0].value,
    //             inputs[1].value,
    //             inputs[2].value,
    //             inputs[3].value);

    let card = document.createElement("card");
    card.classList.add("card");

    let profile = document.createElement("profile")
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h2 = document.createElement("h2");
    h2.textContent = inputs[1].value;

    let h3 = document.createElement("h3");
    h3.textContent = inputs[2].value;

    let h4 = document.createElement("h4");
    h4.textContent = inputs[3].value;


    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    
    body.appendChild(card);
    
    inputs.forEach((inp)=>{
        if(inp.type !== "submit"){
            
            inp.value = "";
        }
    })
    
})