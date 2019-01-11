var markMass, johnMass, markHeight, johnHeight, bmiMark, bmiJohn

markMass = 85
johnMass = 70

markHeight = 1.85
johnHeight = 1.85

bmiMark = markMass / markHeight^2
bmiJohn = johnMass / johnHeight^2

var markHigherBMI = bmiMark > bmiJohn
// console.log(markHigherBMI)