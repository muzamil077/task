alert("muzamil")

let emptyArry = []

let couresDetail = {
    couresName:"web development coures",
    totalStudents:10,
    companyName:"north aims technologies",
    classTiming:"4pm",
    totalWeeks:13,
    topics:["html","css","javascript"]
}

let unData = emptyArry.unshift(couresDetail)
console.log(emptyArry)


let newModifyData = `our coures is ${emptyArry[0].couresName}.
 thier are ${emptyArry[0].totalStudents} students in our class.
  our class timing is ${emptyArry[0].classTiming}.total weeks are 
  ${emptyArry[0].totalWeeks}and our coures topics are
   ${emptyArry[0].topics}`



console.log(newModifyData)


let findCoures = prompt("inter coures name")

if(findCoures === emptyArry[0].couresName){
    alert(newModifyData)
}else if(findCoures === emptyArry[0].companyName){
    alert(emptyArry[0].companyName)
}else if(findCoures === emptyArry[0].totalWeeks){
    alert(emptyArry[0].totalWeeks)
}
else{
    alert("user not define")
}


let num1 = parseInt(prompt("inter first number"))
let operators =prompt("inter operatore")
let num2 = parseInt(prompt("inter second number"))


if(operators ==="+"){
    alert(num1+num2)
}else if(operators === "-"){
    alert(num1-num2)()
}else if(operators === "*"){
    alert(num1*num2)
}else if (operators==="/"){
    alert(num1/num2)
}else{
    alert("Envalid number/operator")
}