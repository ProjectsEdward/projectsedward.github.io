//Selector
onEvent("Dice", "click", function(event) {
  setScreen("Game");
  setText("WorL-G", "");
});
onEvent("TwoNUM", "click", function(event) {
  setScreen("Calculator2");
});
onEvent("ThreeNUM", "click", function(event) {
  setScreen("Calculator3");
});
onEvent("MultiCal", "click", function(event) {
  setScreen("MultiCalculator");
});
onEvent("FractionCalculator", "click", function(event) {
  setScreen("FractionCal");
});
onEvent("MessagingApp", "click", function(event) {
  setScreen("InfoScreen");
});
onEvent("PaintSel", "click", function(event) {
  setScreen("Paint");
});
onEvent("Next", "click", function(event) {
  setScreen("Selector2");
});
onEvent("Previous2", "click", function(event) {
  setScreen("Selector");
});
onEvent("Next2", "click", function(event) {
  setScreen("Selector3");
});
onEvent("Previous3", "click", function(event) {
  setScreen("Selector2");
});
//Calculator2NUM
hideElement("Answer");
onEvent("+", "click", function(event) {
  showElement("Answer");
  setText("Answer", getNumber("1") + getNumber("2"));
});
onEvent("-", "click", function(event) {
  showElement("Answer");
  setText("Answer", getNumber("1") - getNumber("2"));
});
onEvent("✕", "click", function(event) {
  showElement("Answer");
  setText("Answer", getNumber("1") * getNumber("2"));
});
onEvent("÷", "click", function(event) {
  showElement("Answer");
  setText("Answer", getNumber("1") / getNumber("2"));
});
onEvent("C", "click", function(event) {
  hideElement("Answer");
  setText("1", "");
  setText("2", "");
});
onEvent("Back", "click", function(event) {
  setScreen("Selector");
});
//Calculator3NUM 
hideElement("Answer-3");
onEvent("+-3", "click", function(event) {
  showElement("Answer-3");
  setText("Answer-3", (getNumber("1-3") + getNumber("2-3")) + getNumber("3-3"));
});
onEvent("--3", "click", function(event) {
  showElement("Answer-3");
  setText("Answer-3", (getNumber("1-3") - getNumber("2-3")) - getNumber("3-3"));
});
onEvent("✕-3", "click", function(event) {
  showElement("Answer-3");
  setText("Answer-3", (getNumber("1-3") * getNumber("2-3")) * getNumber("3-3"));
});
onEvent("÷-3", "click", function(event) {
  showElement("Answer-3");
  setText("Answer-3", (getNumber("1-3") / getNumber("2-3")) / getNumber("3-3"));
});
onEvent("C-3", "click", function(event) {
  hideElement("Answer-3");
  setText("1-3", "");
  setText("2-3", "");
  setText("3-3", "");
});
onEvent("Back-3", "click", function(event) {
  setScreen("Selector");
});
//Multiple
var S1;
var S2;
function S2F() {
  if (getChecked("2R1-S") === true) {
  S2 = S1 + getNumber("3-S");
  S3F();
  }
  if (getChecked("2R2-S") === true) {
  S2 = S1 - getNumber("3-S");
  S3F();
  }
  if (getChecked("2R3-S") === true) {
  S2 = S1 * getNumber("3-S");
  S3F();
  }
  if (getChecked("2R4-S") === true) {
  S2 = S1 / getNumber("3-S");
  S3F();
  }
}
function S3F() {
  if (getChecked("3R1-S") === true) {
    setText("Answer-S", S2 + getNumber("4-S"));
  }
  if (getChecked("3R2-S") === true) {
    setText("Answer-S", S2 - getNumber("4-S"));
  }
  if (getChecked("3R3-S") === true) {
    setText("Answer-S", S2 * getNumber("4-S"));
  }
  if (getChecked("3R4-S") === true) {
    setText("Answer-S", S2 / getNumber("4-S"));
  }
}
onEvent("=-S", "click", function(event) {
  if (getText("1-S") == "ABC") {
    setScreen("Hidden");
  } else {
    if (getText("1-S") == "Random") {
      setScreen("RNG")
    } else {
      setScreen("MultiCalculatorAnswer");
      //S-1
      if (getChecked("1R1-S") === true) {
        S1 = getNumber("1-S") + getNumber("2-S");
        S2F();
        }
      if (getChecked("1R2-S") === true) {
        S1 = getNumber("1-S") - getNumber("2-S");
        S2F();
      }
      if (getChecked("1R3-S") === true) {
        S1 = getNumber("1-S") * getNumber("2-S");
        S2F();
      }
      if (getChecked("1R4-S") === true) {
        S1 = getNumber("1-S") / getNumber("2-S");
        S2F();}
    }
  }
});
onEvent("C-S", "click", function(event) {
  setText("1-S", "");
  setText("2-S", "");
  setText("3-S", "");
  setText("4-S", "");
});
onEvent("Back-S", "click", function(event) {
  setScreen("Selector");
});
onEvent("Back-M", "click", function(event) {
  setScreen("MultiCalculator");
});
//Fractions
hideElement("Answer-F");
onEvent("+-F", "click", function(event) {
  showElement("Answer-F");
  setText("Answer-F", getNumber("1-F") / getNumber("2-F") + getNumber("3-F") / getNumber("4-F"));
});
onEvent("−-F", "click", function(event) {
  showElement("Answer-F");
  setText("Answer-F", getNumber("1-F") / getNumber("2-F") - getNumber("3-F") / getNumber("4-F"));
});
onEvent("✕-F", "click", function(event) {
  showElement("Answer-F");
  setText("Answer-F", (getNumber("1-F") / getNumber("2-F")) * (getNumber("3-F") / getNumber("4-F")));
});
onEvent("÷-F", "click", function(event) {
  showElement("Answer-F");
  setText("Answer-F", (getNumber("1-F") / getNumber("2-F")) / (getNumber("3-F") / getNumber("4-F")));
});
onEvent("C-F", "click", function(event) {
  showElement("Answer-F");
  setText("1-F", "");
  setText("2-F", "");
  setText("3-F", "");
  setText("4-F", "");
});
onEvent("Back-F", "click", function(event) {
  setScreen("Selector2");
});
//Data
onEvent("OK-K", "click", function(event) {
  setScreen("KeyValuesRWPage");
});
onEvent("Back-K", "click", function(event) {
  setScreen("Selector");
});
//Write
onEvent("Save", "click", function(event) {
  var id = getText("Recallid1") + getNumber("slider1");
  if (id == "Help0") {
    setText("Message", "Nope");
  } else {
    getKeyValue(id, function (value) {
      if (value == undefined) {
        setKeyValue(id, getText("Message"), function () {
          
        });
      } else {
        setKeyValue(id, (value + ", ") + getText("Message"), function (record) {
          
        });
      }
    });
  }
});
//Read
//Info
onEvent("OK-M", "click", function(event) {
  setScreen("Messenger");
});
//Send
onEvent("Send-M", "click", function(event) {
  if (getText("Username-M") == "Account") {
    setScreen("AccountCreator");
  } else {
    if ((getText("Username-M") == "Info" || getText("Username-M") == "Help") || getText("Username-M") == "help") {
      setText("Message-M", prompt("Why would you do that"));
    } else {
      getKeyValue(getText("Username-M"), function (Message) {
        if (Message == undefined) {
          setKeyValue(getText("Username-M"), getText("Message-M"), function () {
            
          });
        } else {
          setKeyValue(getText("Username-M"), (Message + ",\n") + getText("Message-M"), function (record) {
            
          });
        }
      });
    }
  }
});
//Receive
onEvent("Recieve-M", "click", function() {
  getKeyValue(getText("Password-M"), function (Username) {
    getKeyValue(Username, function (Message) {
      setText("ReceivedMessage-M", Message);
    });
  });
});
timedLoop(100, function() {
  if (getChecked("isRepeat-M") === true) {
    getKeyValue(getText("Password-M"), function (value) {
      getKeyValue(value, function (Message) {
        setText("ReceivedMessage-M", Message);
      });
    });
  }
});
//AccountCreator
onEvent("Create-AC", "click", function() {
  setKeyValue(getText("Password-AC"), getText("Username-AC"), function () {});
  setScreen("Messenger");
});
//Dice Game
onEvent("Back-G", "click", function( ) {
  setScreen("Selector");
});
onEvent("Roll-G", "click", function( ) {
  var P = randomNumber(2, 12);
  var C = randomNumber(2, 12);
  setText("PDice-G", P);
  setText("COMDice-G", C);
  if (P > C) {
    setText("WorL-G", "You Won");
  } else if ((P < C)) {
    setText("WorL-G", "You Lost");
  } else {
    setText("WorL-G", "Tie");
  }
});
