function fib(n)
    {
     var array=[]
     var a=0
     var b=1
     if(n===0)
     {
        console.log(array) 
     }
     else if(n===1)
     {
         array.push(a)
         console.log(array)

     }
     else if(n===2)
     {
         array.push(a)
         array.push(b)
         console.log(array)

         
     }
     else
     {

        array.push(a)
     array.push(b)
        
     while(array.length<n)
         {
          var c=a+b
          array.push(c)
          a=b
          b=c
          
         
         }
     console.log(array)
         
     }
     
    }
fib(2)


