function luhn(number) {
    function toNumberArray(number) {
        var i = 0,
            numberStr = String(number),
            numberArray = [];


        for(i; i < numberStr.length; i++) {
            numberArray[i] = parseInt(numberStr.charAt(i));
        }
        return numberArray;
    }

    function arraySum(array) {
        var i = 0,
            sum = 0;

        for(i; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum;
    }

    function squareSum(number) {
        return arraySum(toNumberArray(number));
    }

    function tenRound(number) {
        return Math.ceil(number / 10) * 10;
    }

    var i = 0,
        numberStr = String(number),
        numberArray = toNumberArray(numberStr),
        checkCode = numberArray[numberArray.length-1],
        results = [0, 0, 0, 0, 0];

    numberArray.pop();

    for(i; i < numberArray.length; i++) {
        if((i+1) % 2 == 0) {
            results[1] = results[1] + numberArray[i];
        } else  {
            results[0] = results[0] + squareSum(numberArray[i] * 2);
        }
    }

    results[2] = results[0] + results[1];
    results[3] = tenRound(results[2]);
    results[4] = results[3] - results[2];
    return results[4] == checkCode;
}