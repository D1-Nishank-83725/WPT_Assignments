
function IsItANumber(txtBox, divForErrorMessage, errorMessage){

    var refToTxtBox = document.getElementById(txtBox);
    var refToDivForErrorMessage = document.getElementById(divForErrorMessage);

    var dataInTxtBox = refToTxtBox.value;

    var isItANumber = false;

    if (dataInTxtBox != "" && !isNaN(dataInTxtBox)) {
        refToDivForErrorMessage.innerText = "";
        console.log(dataInTxtBox);
        isItANumber= true;
    }

    else{
        refToDivForErrorMessage.innerText = errorMessage;
        isItANumber = false;
    }

    return isItANumber;

}



function IsEmpty(txtBox, divForErrorMessage, errorMessage){

    var refToTxtBox = document.getElementById(txtBox);
    var refToDivForErrorMessage  = document.getElementById(divForErrorMessage);

    var dataInTxtBox = refToTxtBox.value;

    var isBoxEmpty = true;

    if (dataInTxtBox != "") {
        refToDivForErrorMessage.innerText = "";
        console.log(dataInTxtBox);
        isBoxEmpty = false;
    }


    else{
        refToDivForErrorMessage.innerText = errorMessage;
        isBoxEmpty = true;
    }

    return isBoxEmpty;

}




function Calculator(operation){
    var refToNum1 = document.getElementById('num1');
    var refToNum2 = document.getElementById('num2');

    var refToResultDiv = document.getElementById('resultDiv');

    var isNum1ANumber = false;
    var isNum2ANumber = false;

    var isNum1BoxEmpty = IsEmpty("num1", "errorMessageForNum1", "Number 1 Not Entered");
    if(isNum1BoxEmpty == false){
        isNum1ANumber = IsItANumber("num1", "errorMessageForNum1", "Number 1 NOT A NUMBER")
    }

    var isNum2BoxEmpty = IsEmpty("num2", "errorMessageForNum2", "Number 2 Not Entered");
    if(isNum2BoxEmpty == false){
        isNum2ANumber = IsItANumber("num2", "errorMessageForNum2", "Number 2 NOT A NUMBER")
    }


    if (isNum1ANumber == true && isNum2ANumber == true) {
        var num1Data = parseFloat(refToNum1.value);
        var num2Data = parseFloat(refToNum2.value);

        var result;

        switch (operation) {

            
            case "add":
                result = num1Data + num2Data;
                refToResultDiv.innerText = parseFloat(result);
                break;

            case "sub":
                result = num1Data - num2Data;
                refToResultDiv.innerText = parseFloat(result);
                break;

            case "mul":
                result = num1Data * num2Data;
                refToResultDiv.innerText = parseFloat(result);
                break;

            case "div":
                result = num1Data / num2Data;
                refToResultDiv.innerText = parseFloat(result);
                break;


        
            default:
                refToResultDiv.innerText = "";
                break;
        }
    }

    
}

