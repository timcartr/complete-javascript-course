var johnTeamAvg = (89 + 120 + 103) / 3
var mikeTeamAvg = (89 + 120 + 103) / 3
var maryTeamAvg = (89 + 120 + 103) / 3
console.log('John\'s Team', johnTeamAvg)
console.log('Mike\'s Team', mikeTeamAvg)
console.log('Mary\'s Team', maryTeamAvg)

switch (true) {
  case johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg:
    console.log('John\'s team wins')
    break
  case mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg:
    console.log('Mike\'s team wins')
    break
  case maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg:
    console.log('Mary\'s team wins')
    break
  case maryTeamAvg > johnTeamAvg && maryTeamAvg === mikeTeamAvg:
    console.log('Mary\'s team and Mike\'s teams tied for first place')
    break
  case johnTeamAvg > maryTeamAvg && johnTeamAvg === mikeTeamAvg:
    console.log('John\'s team and Mike\'s teams tied for first place')
    break
  case johnTeamAvg > mikeTeamAvg && johnTeamAvg === maryTeamAvg:
    console.log('John\'s team and Marry\'s teams tied for first place')
    break
  default:
    console.log('There was a 3-way tie for first place!')
}