function scuberGreetingForFeet(depth){
  if (depth <= 400) {
  return "This one is on me!" 
  } 
  if (depth > 2000) {
    if (depth > 2500 ) {
      return 'No can do.'
    }
    return 'I will gladly take your thirty bucks.'
  }
}


function ternaryCheckCity(city){
  return city === 'NYC'? "Ok, sounds good." : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  }
}