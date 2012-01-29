alert("JavaScript works!");
/*
Number
    Fuzzy-match a number: is the number above or below a number within a certain percent?
    Find the number of hours or days difference between two dates.
Array
    Find the smallest value in an array that is greater than a given number
    Find the total value of just the numbers in an array, even if some of the items are not numbers.
    Given an array of objects and the name of a key, return the array sorted by the value of that key in
    each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/ 

var phoneNumber = "123-456-7890";
var emailAddress = "aaa@bbb.ccc";
var stringSentence = "There is no spoon";
var urlPage = "https://github.com";
var listString = "a,b,c";
var stringSeperator1 = ",";
var stringSeperator2 = "/";

var num1 = 2.1;
var numPercent = 45;
var date1 = 2;
var date2 = 18;
var stringNum = "42";

var array1 = [2,44,76,18,34];
var array2 = [10,"Hello",20,"Bye"];


var checkPhoneNum = function (p){  
    var phoneNumberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
         if(phoneNumberPattern.test(p) == true){
             console.log("Phone number is valid.");
         } else{
             console.log("Not a valid phone number.");
         }
}; 

var validateEmail = function (email){  
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
        if(emailPattern.test(email) == true){
            console.log("Your email address is valid.");
        }  else{
                console.log("Your email address is not valid.");
        }
};

var checkURL = function (url) {
        if(url.substring(0,5) == "https"){
            console.log("That is a URL");
        }
             else if(url.substring(0,4) == "http"){
                console.log("That is a URL");        
                
             } else{
                 console.log("That is not a URL");
             }                  
};

var titleCase = function (sentence){
        var splitString = sentence.split(" ");
            for(var i=0; i<splitString.length; i++) {
                splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
            } 
                console.log(splitString.join(" "));           
};

var changeSeperator = function (listString){
        var splitString = listString.split(stringSeperator1);
            console.log(splitString.join(stringSeperator2));
};

var formatNumber = function (number){
        var newNum = number.toFixed(2);
        console.log(newNum);
};



var string2Number = function (x){
        var num = Number(x);
            console.log(num);
    
};
//OUTPUT
checkPhoneNum(phoneNumber);
validateEmail(emailAddress);
checkURL(urlPage);
titleCase(stringSentence);
changeSeperator(listString);
formatNumber(num1);
string2Number();