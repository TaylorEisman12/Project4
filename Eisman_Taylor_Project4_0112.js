alert("JavaScript works!");
/*
String
    Given a string that is a list of things separated by a given string, as well as another string separator,
    return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
Number
    Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
    Fuzzy-match a number: is the number above or below a number within a certain percent?
    Find the number of hours or days difference between two dates.
    Given a string version of a number such as "42", return the value as an actual Number, such as 42.
Array
    Find the smallest value in an array that is greater than a given number
    Find the total value of just the numbers in an array, even if some of the items are not numbers.
    Given an array of objects and the name of a key, return the array sorted by the value of that key in
    each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/ 

var phoneNumber = 123-456-7890;
var emailAddress = aaa@bbb.ccc
var stringSentance = "There is no spoon";
var stringSeperator = "abc";
var url = "https://github.com";

var num1 = 2.1;
var numPercent = 45;
var date1 = 2;
var date2 = 18;
var num2String = 42;

var array1 = [2,44,76,18,34];
var array2 = [10,"Hello",20,"Bye"];


var checkPhoneNum = function(phoneNumber){  
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
        return phoneNumberPattern.test(phoneNumber);  
}; 

var validateEmail = function(emailAddress){  
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
   return emailPattern.test(emailAddress);  
};

var checkURL = function(url) {
        if(url.substring(0,5) = "https"){
            return true;
        }
             if(url.substring(0,4) = "http"){
            return true;
        }
            return false;
};

var titleCase = function(stringSentence){
        var splitString = stringSentence.split(" ");
            for(var i=0; i<splitString.length; i++) {
                splitString[i] = splitString[i][0].toUpperCase + splitString[i].substr(1);
            } 
                return splitString.join(" ");           
};


var formatNumber = function(num1){
        num1.toFixed(2);
        console.log(num1);
};

