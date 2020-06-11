
let markMass  = 78
let johnMass = 85
let markHeight = 1.83
let johnHeight = 1.81

let BMIMark = markMass/(markHeight^2);
let BMIJohn = johnMass/(johnHeight^2);
console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);

console.log(BMIJohn > BMIMark ? true : false)







function tipCalculator(bill){
    let percentage;
    if(bill<50){
        percentage=.2;
    }
    else if(bill>=50 && bill<200){
        percentage =.15;
    }
    else{
        percentage =.1;
    }
    return percentage * bill;
}

let bills = [124,48,268]
let tips=[tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];

let finalValues = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(tips)
console.log(finalValues)
