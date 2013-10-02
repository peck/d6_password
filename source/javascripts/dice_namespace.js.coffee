window.dice = {}
dice.select_language = (lang) =>
  dice.wordlist = eval("dice.wordlist_#{lang}")
  nodes = document.getElementsByClassName('lang')
  node.className = "lang" for node in nodes
  document.getElementById("lang_#{lang}").className = "lang active"

dice.populate_words = () =>
    numbers = [0..24].map -> Math.floor(Math.random() * 6) + 1

    slicelen = 5
    document.getElementById("words").innerHTML = ""

    document.getElementById("words").innerHTML += "#{dice.wordlist[numbers[i...i+slicelen].join("")]} " for i in [0..numbers.length-1] by slicelen
 
