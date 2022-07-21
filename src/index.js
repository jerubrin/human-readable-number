module.exports = function toReadable (number) {
    let firstDigit = ["", "one", "two", "three", "four", "five", 
                      "six", "seven", "eight", "nine"];
    let secondDigitOne = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
                          "sixteen", "seventeen", "eighteen", "nineteen"];
    let secondDigit = ["", "ten", "twenty", "thirty", "forty", "fifty",
                       "sixty", "seventy", "eighty", "ninety"];
    let thirdDigit = "hundred";
    
    let str = ""
    if(number >= 100) {
        str += firstDigit[Math.trunc(number / 100)] + " " + thirdDigit;
        if(Math.trunc(number / 100) != number / 100)
            str += " ";
        number = Math.trunc(number % 100);
    }
    if(number >= 10) {
        if (number >= 11 && number <= 19) {
            str += secondDigitOne[Math.trunc(number % 10)];
            number = 0;
        } else {
            str += secondDigit[Math.trunc(number / 10)];
            if(Math.trunc(number / 10) != number / 10)
                str += " ";
            number = Math.trunc(number % 10);
        }
    }
    if(number > 0) {
        str += firstDigit[number]
    }
    if (str == '') str = "zero";
    return str;
}