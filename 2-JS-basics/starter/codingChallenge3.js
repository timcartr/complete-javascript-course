var bills = [124, 48, 268]

function tipCalculator(arr){
  let tips = []
  let totals = []
  arr.map(bill => {
    if(bill <= 50){
      tips.push(bill * .2)
      totals.push(bill + (bill * .2))
    }else if(bill > 50 && bill < 200){
      tips.push(bill * .15)
      totals.push(bill + (bill * .15))
    }else {
      tips.push(bill * .1)
      totals.push(bill + (bill * .1))
    }
  })
  console.log(tips)
  console.log(totals)
}

tipCalculator(bills)