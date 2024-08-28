var bird={
    hasWings: true,
    canFly: true,
    hasFeathers: true
};
var eagle1=Object.create(bird);
console.log("eagle1:",eagle1);
console.log("can hasfeathers",eagle1.hasFeathers);
console.log("can fly",eagle1.canFly);
console.log("haswings",eagle1.hasWings);
var picKock=Object.create(bird);
console.log("peacock",picKock.hasFeathers)
console.log("peacock",picKock.canFly)
console.log("peacock",picKock.hasWings)

