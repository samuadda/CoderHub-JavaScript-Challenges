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