(function() {
  var _this = this;

  window.dice = {};

  dice.select_language = function(lang) {
    var node, nodes, _i, _len;
    dice.wordlist = eval("dice.wordlist_" + lang);
    nodes = document.getElementsByClassName('lang');
    for (_i = 0, _len = nodes.length; _i < _len; _i++) {
      node = nodes[_i];
      node.className = "lang";
    }
    return document.getElementById("lang_" + lang).className = "lang active";
  };

  dice.populate_words = function() {
    var i, numbers, slicelen, _i, _j, _ref, _results, _results1;
    numbers = (function() {
      _results = [];
      for (_i = 0; _i <= 24; _i++){ _results.push(_i); }
      return _results;
    }).apply(this).map(function() {
      return Math.floor(Math.random() * 6) + 1;
    });
    slicelen = 5;
    document.getElementById("words").innerHTML = "";
    _results1 = [];
    for (i = _j = 0, _ref = numbers.length - 1; slicelen > 0 ? _j <= _ref : _j >= _ref; i = _j += slicelen) {
      _results1.push(document.getElementById("words").innerHTML += "" + dice.wordlist[numbers.slice(i, i + slicelen).join("")] + " ");
    }
    return _results1;
  };

}).call(this);
