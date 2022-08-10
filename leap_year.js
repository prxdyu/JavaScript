function isLeap(year)
    {
        if(year%4===0&&year%100===0&&year%400===0)
        {
            console.log("it is a leap year")
        }
        else
        {
            console.log("Not a leap year")
        }
    }
isLeap(2100)