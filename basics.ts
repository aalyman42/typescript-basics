//A Union type
type wanted = "dead" | "alive" | "dead or alive" | "none";
//A generic type
type crewArray = Array<string>;

interface Captain {
  name: string;
  ship: string;
  bounty: number;
  crew: crewArray;
}

const captainOne: Captain = {
  name: "Blackbeard",
  ship: "Black Pearl",
  bounty: 100000,
  wanted: "dead or alive",
  crew: ["Mike", "Eddy", "Dustin"],
};

//Using a generic in a type declaration
//adding the get and add methods to the object
interface cargoHold<type> {
  add: (obj: type) => void;
  get: () => type;
}
//any cargo hold can accept any inventory
//the merchandise type is defined as a few specific strings
type merchendise = "Wine" | "Silk" | "Spices" | "Fruits";

//the contraband types is defined as other discreet strings
type contraband = "Guns" | "Rum" | "Knives";

//declare a new object called bpHold of type cargoHOld that can use the type of contrabnd
declare const bpHold: cargoHold<contraband>;

//Because Guns are part of the Contraband type, we are allowed it to the BLack Pearl's hold.
bpHold.add("Guns");

//The blackpearl is only accepting contraband at the time, so trying to add silk leads to an error.
bpHold.add("Silk");

//Typescript will automatically match existing types when a new constant initiates. You do not have to define a captain as a captain type as long as the object matches the structure.
const captainTwo = {
  name: "John Smith",
  ship: "Mayflower",
  crew: ["James", "Peter", "Andrew"],
  nation: "England",
  wanted: "none",
};

function disembark(cap: Captain) {
  console.log(`I am captain ${cap.name} and my ship is called the ${cap.ship}`);
}

disembark(captainOne);
disembark(captainTwo);
//disembarking captainTwo returns an error because captainTwo is missing keys that are a part of the captain type

const captainThree = {
  name: "Davy Jones",
  ship: "Flying Dutchman",
  bounty: 900000,
  wanted: "alive",
  crew: ["Steve", "Lukas", "William"],
  nation: "none",
};

//even with the aditional "nation" key, as long as a captain meets the minimum requirements of the type, it will join the type.
disembark(captainThree);
