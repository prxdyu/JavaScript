var todos=[
    {
        title:"Go to gym",
        status:true
    },
    {
        title:"Eat BF",
        status:false
    },
    {
        title:"Home work",
        status:true
    }
]

todos.forEach(function(i){
    if (i.status==true){
       console.log(i.title);
    }
})