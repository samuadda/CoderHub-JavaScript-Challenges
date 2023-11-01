//OOP Paradigm Programming 

/*Transportation company project
Project Idea
A transportation company wants to assign its cars and planes to a number of drivers or pilots. Therefore, the idea of the application is to help them assign the vehicle, whether it is a car or a plane, to a qualified driver or pilot, so that planes must be assigned to a pilot and cars must be assigned to a driver.

##Steps
> Create a class for vehicles and define their properties such as (name, manufacturer, ID).
> Create a Class for the car so that it inherits from the Vehicles Class and define the characteristics of the car (type of car, gas or electric...).
> Create a Class for the Airplane so that it inherits from the Vehicles Class and define the characteristics of the plane (type of plane...).
> Create a Class with the name employee to represent employees and define its properties such as (name, ID, date of birth).
> Create a Driver Class that inherits from the Employee Class with additional driver properties defined such as licenseID.
> Create a Pilot class that inherits from the Employee class and defines additional pilot properties such as licenseID.
> Create a Reservation Class that contains the driver and his vehicle, such as (reservationDate, employeeId, vehiclesId, reservationID).
> After completing the above creation, define objects for three cars and two planes.
> Write a function that receives the employee's ID and the vehicle's ID and checks. If the employee is a pilot and the vehicle is a car, a message that they are not compatible will be printed. If the employee is a pilot and the vehicle is an airplane, an object will be created and stored in the Class reserved.
> Save all reservations into an array.
> Print the content of the array using the map function.

##By the end of this project the student will be able to:
Dealing with object-oriented programming (OOP) and its properties in JavaScript.
Dealing with matrix functions.
Dealing with functions in more depth.*/

// Created class for vehicles
class Vehicles {
    constructor(name ,manifactorar, identity){
        this.name = name;
        this.manifactorar = manifactorar;
        this.identity = identity;
    }
}

// Created class for cars and inherits from class Vehicles
class Cars extends Vehicles {
    constructor(name ,manifactorar, identity,fuel, passengers, engine){
        super(name ,manifactorar, identity)
        this.fuel = fuel;
        this.passengers = passengers;
        this.engine = engine;
    }
}

// Created class for planes and inherits from class Vehicles
class Planes extends Vehicles {
    constructor(name ,manifactorar, identity,planeType, range, passengers ){
        super(name ,manifactorar, identity)
        this.planeType = planeType;
        this.range = range;
        this.passengers = passengers;

    }
}

// Created class for Employee
class Employee {
    constructor(name, DateOfBirth, id){
        this.name = name;
        this.DateOfBirth = DateOfBirth;
        this.id = id;
    }
}

// Created class for Driver and inherits from class Employee
class Driver extends Employee{
    constructor(name, DateOfBirth, id,licendeID, experince, height, weight){
        super(name, DateOfBirth, id);
        this.licendeID = licendeID;
        this.experince = experince;
        this.height = height;
        this.weight = weight;
    }
}

// Created class for Pilot and inherits from class Employee
class Pilot extends Employee{
    constructor(name, DateOfBirth, id, licendeType, fliedHours){
        super(name, DateOfBirth, id);
        this.licendeType = licendeType;
        this.fliedHours = fliedHours;
    }
}

// Created class for Employee Reservations
class Reservation {
    constructor(reservationDate, employeeId , vehiclesId ,reservationID){
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }
}

// Create instances from class cars in 
let cars = [
    new Cars("Camaro", "Cheveolet", "xxy12", "Red 95", 4, "4,5L"),
    new Cars("S500", "Mercedes-Benz", "duty12", "Red 95", 4, "6L"),
    new Cars("Patrol", "NIssan", "mmy12", "Dezel", 7, "6L"),

];

// Create instances from class cars
let planes = [
    new Planes("SL20" ,"Honda", "hp23","private", "2000 Km", 9),
    new Planes("whale" ,"Boing", "747","commercial", "10000 Km", 700),
];

// Create instances from classes pilot and driver
let employees = [
    new Pilot("saqr", "1980,08,26", 1002003000, "international", "300 Hours"),
    new Driver("majed", "1990,07,14", 1003004000,1020304050, "14 years", "184 Cm", "80 Kg"),
]

// an array that will store the reservation info after creation
let reservedInfo = [];


// function that creates Reservations
function createReservation(employeeIdentity,vehiclesIdentity){
    //check which instance the property is from and store it in varible
    const employee = employees.find((emp) => emp.id === employeeIdentity);
    const vehicle = [...cars, ...planes].find((veh) => veh.identity === vehiclesIdentity);

    //check if the employee id and vehicle id are matched 
    if (employee instanceof Pilot && vehicle instanceof Planes ||
        employee instanceof Driver && vehicle instanceof Cars ){

    // create a reservation (an instance) from the class Reservation
            const reservation = new Reservation(new Date(), employeeIdentity, vehiclesIdentity, reservedInfo.length+1);    

    //push Reservation info to reservedInfo array 
            reservedInfo.push(reservation);
            return (`Reservation Created Successfully`)
    
    }else if (employee instanceof Driver && vehicle instanceof Planes) {
        return `This is a miss match Drivers can't pilot airplanes`
    }

    else if (employee instanceof Pilot && vehicle instanceof Cars){
        return `This is a miss match Pilots can't drive cars`
    }

    else {
        return `Employee or vehicle not found.`
    }
    
}

//Print reservation info using map
function printReservations(){
    let printing = reservedInfo.map((ele)=>{
        console.log(`Vehicle Id: ${ele.vehiclesId}
                    Employee Id: ${ele.employeeId}
                    Reservation id: ${ele.reservationID}
                    Reservation date ${ele.reservationDate}`)
                
    });
}

// examples
createReservation(1003004000,"mmy12")//Reservation Created Successfully
createReservation(1003004000,"747") //This is a miss match Drivers can't pilot airplanes
createReservation(1002003000,"mmy12") //This is a miss match Pilots can't drive cars

//calling reservation info 
printReservations();
