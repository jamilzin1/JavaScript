let userPhrase;
let x;
document.getElementById("submitClick").onclick = function(){
    userPhrase= document.getElementById("inputUser").value;
    parameterUser= document.getElementById("parameterUser").value;
    document.getElementById("count").innerHTML = contador();
    document.getElementById("dancing").innerHTML = dancingSentence(userPhrase);
    document.getElementById("reverse").innerHTML = reverseString(userPhrase);
    document.getElementById("reverseDancing").innerHTML = reverseString(dancingSentence(userPhrase));

}

document.getElementById("parameterUser").onclick = function()
{
    document.getElementById("parameterUser").value= "";
}
function reverseString(userPhrase){
    let reverse = userPhrase.length+1;
    returnString = "";
    do
    {
        returnString+=userPhrase.charAt(reverse-1);
        reverse--;
    } while(reverse>0)
 return returnString;
}
function dancingSentence(userPhrase){
    let returnString="";
    let spaces=0;
    for(let i=0; i<userPhrase.length;i++){
        if(userPhrase.charAt(i)==" ")
        {
            returnString+=" ";
            spaces++;
        }
         else if((i-spaces)%2==0) 
         {
            returnString +=userPhrase.charAt(i).toUpperCase();
         }
        else
        {
            returnString +=userPhrase.charAt(i).toLowerCase();
        }
    }
 return returnString; 
}
function contador(){
    let count=0;
    for(let i=0; i<userPhrase.length;i++){
        if(userPhrase.charAt(i)==parameterUser){
            count+=1;
            }
                }
 return count;
}
let encryptText = "jamil souza";
let char1 = encryptText.charAt(encryptText.length-1);
let char2 = encryptText.charAt(0);
let char3 = encryptText.charAt((encryptText.length%3));
console.log("to encrypt: "+encryptText);
let test1= encrypt(encryptText,1);
console.log("after encrypt: "+test1);
console.log("undo encrypt >> @b3jkInkSd1&#$ee124#$%dasdaWss0f%=u8eS2SSçl)il¨003j4K¨souz#$ee124#$%dasdaWss0f%");
console.log("after decrypt: " +encrypt(test1,0));

function encrypt(encryptText, x)
{
    if(x==1)
    {
        encryptText = encryptText.replaceAll(char1,"#$ee124#$%dasdaWss0f%");
        encryptText = encryptText.replaceAll(char3,"=u8eS2SSçl)");
        encryptText = encryptText.replaceAll(char2,"@b3jkInkSd1&");
        encryptText = encryptText.replaceAll(" ","¨003j4K¨");
    }
    else
    {
        encryptText = encryptText.replaceAll("¨003j4K¨"," ");
        encryptText = encryptText.replaceAll("@b3jkInkSd1&",char2);
        encryptText = encryptText.replaceAll("=u8eS2SSçl)",char3)
        encryptText = encryptText.replaceAll("#$ee124#$%dasdaWss0f%",char1);
   
    }
return encryptText;
}
