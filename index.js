console.log("done")
let num;


let numData = [];
console.log(numData)
let phoneNum;
let randomNumber = Math.floor(Math.random() * 10);


function randomNum() {
    let digit4 = Math.floor(Math.random() * 10)
    let digit5 = Math.floor(Math.random() * 10)
    let digit6 = Math.floor(Math.random() * 10)
    let digit7 = Math.floor(Math.random() * 10)
    let digit8 = Math.floor(Math.random() * 10)
    let digit9 = Math.floor(Math.random() * 10)
    let digit10 = Math.floor(Math.random() * 10)
    // if (numData.length > 5 ) {
    //     for (let i = 1; i < numData.length; i++) {
    //         $("ul").append(`<li>${numData[i]}</li>`);
    //         console.log(i)
    //          console.log('complete')


    //     }

    // } 
    // else {


    phoneNum = `305${digit4}${digit5}${digit6}${digit7}${digit8}${digit9}${digit10}`;

    console.log(phoneNum)

    for (let i = 0; i < numData.length+1; i++) {
        console.log(phoneNum, numData)
        if (phoneNum === numData[i]) {
            // numData.unshift(phoneNum)
            console.log("IF")
            console.log(numData[i])
        }
        else {
            console.log('ELSE')
            return numData.push(phoneNum)
        }
    
        

        
        // randomNum(Math.floor(Math.random() * 10))


    }
    console.log('instead this')

}

function listDisplayer(){
for (let i = 0; i < numData.length; i++) {
            $("ul").append(`<li>${numData[i]}</li>`);
          


        }
}


$("#add").click(function () {
    // This is where i change the number of phones we want to add at a time
    for (let i = 0; i < 20; i++) {
         randomNum()

    }
});

$("#delete").click(function () {
    numData = [];
    $("li").remove();
});

$("#display").click(function () {
    $("li").remove();
   listDisplayer(numData);
});

$("#hide-all").click(function(){
    $("button").hide(1000);
    $("h5").hide(1000);
    $("#hidden-div").hide(1000);
    setInterval(showAgain, 5000)

})

function showAgain(){
    $("button").show(1000);
    $("h5").show(1000);
    $("#hidden-div").show(1000);
}

$("button").click(function(){
   $("#phoneCounter").html(`Count of phones acquired:  ${numData.length} `)
})