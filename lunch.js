function whosPaying(list)
{
 var index=Math.floor(Math.random(list)*list.length)
 
 console.log(list[index]+" is going to buy lunch today for us")
}
var employees=["Pradyu","Mohan","Yuvaraj","Ajay"]
whosPaying(employees)