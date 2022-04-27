

class DOM {
    constructor(wall, rooms, doors, window, founfation, materialOfwall, height, width, gases, electricity, garage,area, floors, bathrooms, attic){
        this.wall = wall;
        this.rooms = rooms;
        this.doors = doors;
        this.window = window;
        this.foundation = founfation;
        this.materialOfwall = materialOfwall;
        this.height = height;
        this.width = width;
        this.gases = gases;
        this.electricity = electricity;
        this.garage = garage;
        this.area = area;
        this.floors = floors;
        this.bathrooms = bathrooms;
        this.attic = attic;
    }
}


const dom = new DOM (
    "red",
    4,
    5,
    4,
    "cement",
    "brick",
    "6m",
    "135m^2",
    "gasptom",
    "5kwat",
    1,
    "245m^3",
    3,
    2,
    6,
    2,
)

console.log(dom)


class School {
    constructor(wall, cabinets, doors, window, teachers, materialOfwall, height, width, electricity, basement,area, floors, toilet, schoolboys, schoolgirls){
        this.wall = wall;
        this.cabinets = cabinets;
        this.doors = doors;
        this.window = window;
        this.teachers = teachers;
        this. materialOfwall = materialOfwall;
        this.height = height;
        this. width = width;
        this.electricity = electricity;
        this.basement = basement;
        this.area = area;
        this.floors = floors;
        this.toilet = toilet;
        this.schoolboys = schoolboys;
        this.schoolgirls = schoolgirls;
    }
}


const school = new school(
    "yellow",
    20,
    20,
    34,
    40,
    "brick",
    "8m",
    '200m',
    "9kwat",
    "9",
    "435m^3",
    3,
    45,
    648,
    500
)
console.log(school)

