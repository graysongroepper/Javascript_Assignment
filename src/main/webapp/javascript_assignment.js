
let paragraphs = $("p");

console.log(paragraphs)

console.log("There are " + paragraphs.length + " paragraphs in this page.");

for(let i = 0; i < paragraphs.length; i++) {
    let paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}
//Part 1
function myUpdateFunction(event) {
    let fieldValue = $("#helloTable").val();
    $("#tableName tbody").append("<tr><td>"+"Hello"+"</td></tr>")
}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction);

//Part 2
function addingValues(event){
    let firstNumber = parseInt($("#field1").val());
    let secondNumber = parseInt($("#field2").val());
    let total = firstNumber + secondNumber;

    $("#field3").val(total);
}

let formButton2 = $("#button2");
formButton2.on("click", addingValues);

//Part 3
function hideFunction(event) {
    $("#paragraphToHide").toggle(500);

}

let formButton3 = $("#button3");
formButton3.on("click", hideFunction);

//Part 4
function validateFunction(event) {
    let formfield = $("#phoneField").val();
    let regularExpression = /^\d{3}-\d{3}-\d{4}$/


    if(regularExpression.test(formfield)) {
        console.log("ok");
    } else {
        console.log("bad");
    }
}

let formButton4 = $("#button4");
formButton4.on("click", validateFunction);

//Part 5
function jsonFunction(event){
    let formJsonObject = {};
    let formValF = $("#firstName").val();
    let formValL = $("#lastName").val();
    let formValE = $("#email").val();


    formJsonObject.firstName = formValF;
    formJsonObject.lastName = formValL;
    formJsonObject.email = formValE;
    let jsonString = JSON.stringify(formJsonObject);
    $("#jsonPrint").text(jsonString);
    console.log(jsonString);
}

let formButton5 = $("#button5");
formButton5.on("click", jsonFunction);