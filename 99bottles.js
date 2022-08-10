var  beer=99
function song()
    {

        while(beer>0)
            {
                console.log(beer+" bottles of beer on the wall")
                beer--
                console.log("take one down and pass it around "+beer+" bottles of beer on the wall")
            }
        console.log("No more bottles of beer on the wall ")
    }
song()