(function(){
    var countButton;
    var numberField;
    var resultField;

    var countFinished = false;

    function init () {
        countButton = document.querySelector("#count-btn");
        numberField = document.querySelector("#number");
        resultField = document.querySelector("#result");

        countButton.addEventListener("click",count,false);
        numberField.addEventListener("change",resetResult,false);
    }

    function resetResult () {
        if(countFinished) {
            resultField.value = "";
        }
    }

    function getNumber () {
        return parseInt(numberField.value);
    }

    function checkNumber (number) {
        return (!isNaN(number));
    }

    function calcOdd (number) {
        var result = {
            "int": 0,
            "text": ""
        };
        var absNumber = Math.abs(number);

        for(var i = 1; i <= absNumber; i += 2) {
            if(i > 1) {result.text += "+"}
            if(i < absNumber) {
                result.int += 2*(number-i);
                result.text += "2*(" + number+ "-" + i +")";
            } else {
                result.int += 2;
                result.text += "2";
            }
            console.log("calcOdd",i,result.int,result.text);
        }

        return result;
    }

    function calcEven (number) {
        var result = {
            "int": 0,
            "text": ""
        };
        var absNumber = Math.abs(number);

        for(var i = 0; i <= absNumber; i += 2) {
            if(i > 0) {result.text += "+"}
            if(i < absNumber) {
                   result.int += 2*(number-i);
                if(i == 0) {
                  result.text += "2*"+number;
                } else {
                    result.text += "2*(" + number+ "-" + i +")";
                }
            } else {
                result.int += 2;
                result.text += "2";
            }
            console.log("calcEven",i,result.int,result.text);
        }

        return result;
    }

    function calculationProc (number) {
            if (number>0)
            {return Math.sqrt(number);}
                 else
                 { alert("Ведіть число більше нуля");}
            }

    function count () {
        var number = getNumber();
        if(checkNumber(number)){
            var result = calculationProc(number);
            resultField.value = result;
            countFinished = true;
        } else {
            alert("Entered number is not correct");
        }

    }

    init();
})();
