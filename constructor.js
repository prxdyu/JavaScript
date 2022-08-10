// creating a constructor function

function HouseWorker(name,age,experience,martial_status)
    {
        this.name=name;
        this.age=age;
        this.experience=experience;
        this.martial_status=martial_status;
        //adding a method to the object
        this.clean=function() {
            alert("cleaning in progress");
        }
    }

// creating the object for the constructor function
worker1=new HouseWorker("rachel",33,10,false);
console.log(worker1)