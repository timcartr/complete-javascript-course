var scores, roundScore, activePlayer, gamePlaying, scoreToWin

init()

var prevRoll

/******** Initialize Game */
function init(){
  scores = [0,0]
  activePlayer = 0
  roundScore = 0
  gamePlaying = true
  scoreToWin = 100

  document.querySelector('.dice').style.display = 'none'

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')

}


//******** Roll Dice Btn **/
document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1
    
    // Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src= 'dice-' + dice + '.png'
    
    // 3. Update the round score IF the rolled number was NOT a 1
    if(dice === 6 && prevRoll === 6) {
      // Player rolls two 6, lose ALL score
      scores[activePlayer] = 0
      document.querySelector('#score-' + activePlayer).textContent = 0
      nextPlayer()
    } else if(dice !== 1) {
      // Add Score
      roundScore += dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore
    }else {
      // Move to the next player
      nextPlayer()
    }
    prevRoll = dice
  }
})

/********* Set Score to Win */
document.querySelector('.btn-setScore').addEventListener('click', function(){
  scoreToWin = document.querySelector('.input-score').value
  console.log(scoreToWin)
  document.querySelector('.points-selector').textContent = scoreToWin + ' points'
})

//********  Hold Score Btn */
document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    // Add  Current score to global score
    scores[activePlayer] += roundScore
  
    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
    // Check if player won the game
    if(scores[activePlayer] >= scoreToWin){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
      document.querySelector('.dice').style.display = 'none'
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
      gamePlaying = false
    }else {
      nextPlayer()
    }
  }
})

/********* Next Player logic*/
function nextPlayer(){
  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0

  document.getElementById('current-0').textContent = 0
  document.getElementById('current-1').textContent = 0

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

    // document.querySelector('.player-0-panel').classList.remove('active')
    // document.querySelector('.player-1-panel').classList.add('active')

  document.querySelector('.dice').style.display = 'none'
}

/******** New Game Btn */
document.querySelector('.btn-new').addEventListener('click', init)