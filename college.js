
// first url call then async click we did then after input.value is inside click so keep it await with api() and use try catch..
// thenuse syle and all required then use after api call color chang usinf style.....
// apiname() call inside that axios is requiered as response with await then after that we manaa datas are there so use fot of js loops!!!
// using loop get arrays,  then use array by declaring arrays as response.data...then array of arrays loop
// array.name you do......
// then add as list..by creating list inside already definf html ol/ul
// same for apiwebsiteurl().... for this use array.website_name or something
// thne all same..imp is new li element to be created and added  thank you............... 


let form = document.querySelector("form");
let button = document.querySelector("button");
let input = document.querySelector("#cntryInp");
let body = document.querySelector("body");



let clgName = document.querySelector("#name");
let clgNameRes = document.querySelector("#nameRes");


let webName = document.querySelector("#website");
let webNameRes = document.querySelector("#websiteRes");


let url = 'http://universities.hipolabs.com/search?name=';




// let country = "canada";



async function apiName(country){
    try{
        let response = await axios.get(url+country);
        console.log(response);
        console.log(response.data);
        console.log(response.data[0].name);

        let array = response.data;
        // response.dats is arrays inside which again there are parameters:

        for(let value of array){
            let list = document.createElement("li");
            console.log(value.name);
            // let name = value.name
            list.innerText = value.name;
            clgNameRes.appendChild(list);
            // append child and return it automatically
            list.style.marginBottom = "10px";

            

        }
        // return response.data[0].name;



    }
    catch(error){
       
        console.log("error in finding the colllege name :",error);
        alert("enter CORRECT COUNTRY NAME!!!")

    }
}


async function apiWeb(country){
    try{
        let response = await axios.get(url+country);
        console.log(response);
        console.log(response.data[0].web_pages);
        // return response.data[0].web_pages;


        let array = response.data;

        for(let value of array){
            let list = document.createElement("li");
            console.log(value.name);
            let web = value.web_pages
            list.innerText = web;
            webNameRes.appendChild(list);

// IMPORTANT: WHAT WE CREATED THAT ONLY SHOULD BE APPENDED,NO NEED TO CONFUSE..

            list.style.marginBottom = "10px";



        }

    }
    catch(error){
        console.log("error in finding the colllege website :",error);
    }
}




button.addEventListener("click", async (event)=>{
    // if(input.value.length() == 0){
    //     event.preventDefault();
    //     alert("enter country");
    // }
    
    let country = input.value;
    input.value = "";


    body.style.backgroundColor = "white";

    // console.log(event);
    clgNameRes.innerText = "";
    webNameRes.innerText = "";


    
    console.log(country);
    event.preventDefault();
    try{
     await apiName(country);

    clgName.style.color = "green";
    // clgNameRes.innerText = responseName;

     await apiWeb(country);
    webName.style.color = "green";
    body.style.backgroundColor = "beige";
    // webNameRes.innerText = responseWeb;

    }
    catch(error){
        console.log(error);
    }

    // return apiName(); 
    // alert("default prevented!!");
    
});




// button.addEventListener("click",  (event)=>{
//     // console.log(event);
//     // let country = input.value;
//     console.log(country);

//     event.preventDefault();
//     // try{
//     // let responseName = await apiName(country);

//     // clgName.style.color = "green";
//     // clgNameRes.innerText = responseName;

//     // let responseWeb = await apiWeb(country);
//     // webName.style.color = "green";
//     // webNameRes.innerText = responseWeb;

//     // }
//     // catch(error){
//     //     console.log(error);
//     // }

//     // return apiName(); 
//     // alert("default prevented!!");

// });


