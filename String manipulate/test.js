let string1 = "abcdef w";
let string2 = "cacbdffe";


function verify(){
    let returnString="";
    let count=0;
for(let i=0; i<string1.length; i++)
{
    for(let j=0; j<string2.length; j++)
{
    if(string1.charAt(i)==string2.charAt(j)){
        if(returnString.includes(string1.charAt(i))==false)
        {
        returnString+=string1.charAt(i);
        count++;
        }
    }
    else
    {
    string2.replace(string2.charAt(j), "");
    }

}
}
console.log("Existem "+count+" letras iguais: ");
return returnString;
}
console.log(verify());