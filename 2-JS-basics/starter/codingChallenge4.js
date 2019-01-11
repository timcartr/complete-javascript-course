var john = {
  name: 'John',
  mass: 85,
  height: 1.85,
  calcBMI: function(){
    this.BMI = this.mass / this.height^2
    return this.BMI
  }
}

var mark = {
  name: 'Mark',
  mass: 95,
  height: 1.85,
  calcBMI: function(){
    this.BMI = this.mass / this.height^2
    return this.BMI
  }
}

function highestBMI(obj1,obj2){
  if(obj1.calcBMI() > obj2.calcBMI()){
    console.log(`${obj1.name} has a higher BMI with ${obj1.BMI}`)
  } else if (obj2.BMI > obj1.BMI){
    console.log(`${obj2.name} has a higher BMI with ${obj2.BMI}`)
  } else {
    console.log(`They both have the same BMI`)
  }
}

highestBMI(john, mark)