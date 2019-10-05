var myString = "Karssssssssssssssssssssssssssssssssol i sdsdadas ads ad skupsko";
console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());

if (myString.length > 19){
    console.log("ilość znaków w myString jest większa niż 19");
} else {
    console.log("Ilość znaków w myString jest mniejsza niż 19");
}

if (myString.indexOf("kupsko") === -1){
    console.log("Słowo kupsko nie występuje")
} else {
    console.log("Słowo kupsko występuje na pozycji " + (myString.indexOf("kupsko")));
}

var string1 = "abc";
var string2 = "bcd";

console.log(string1 !== string2);