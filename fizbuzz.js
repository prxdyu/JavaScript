var output=[]
var i=0
function fizz() 
    {
        while(i<=100)
            {


                i++
        if(i%3===0&&i%5===0)
        {
            output.push("FizzBuzz")
        }
        else if(i%3===0)
        {
            output.push("fizz")
        }
        else if(i%5===0)
        {
            output.push("buzz")
        }
        
        else
        {
            output.push(i)
        } 
            }
        
        console.log(output)
    }

    
fizz()
