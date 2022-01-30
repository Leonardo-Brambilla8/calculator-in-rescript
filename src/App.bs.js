'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var button = {
  border: "1px solid White",
  height: "90px",
  width: "120px"
};

var button1 = {
  border: "1px solid White",
  height: "90px",
  width: "90px"
};

function App$Button(Props) {
  var onClick = Props.onClick;
  var labelOpt = Props.label;
  var label = labelOpt !== undefined ? labelOpt : "Label";
  return React.createElement("button", {
              onClick: onClick
            }, label);
}

var Button = {
  make: App$Button
};

function Appf() {  
    var match = React.useState(function () {
          return 0;
        });
    var setState = match[1];
    var state = match[0];
    var match$1 = React.useState(function () {
          return 0;
        });
    var sublabel = match$1[1];
    var plabel = match$1[0];
    var match$2 = React.useState(function () {
          return "";
        });
    var setoperation = match$2[1];
    var operation = match$2[0];
    var handlereset = function (param) {
      return Curry._1(setState, (function (param) {
                    return 0;
                  }));
    };
    var handleresetall = function (param) {
      Curry._1(sublabel, (function (param) {
              return 0;
            }));
      Curry._1(setState, (function (param) {
              return 0;
            }));
      Curry._1(setoperation, (function (param) {
              return "";
            }));
      
    };
    var handleDivision = function (param) {
      Curry._1(sublabel, (function (param) {
              return state;
            }));
      Curry._1(setState, (function (param) {
              return 0;
            }));
      Curry._1(setoperation, (function (param) {
              return " /";
            }));
      
    };
    var handlemultiplic = function (param) {
      Curry._1(sublabel, (function (param) {
              return state;
            }));
      Curry._1(setState, (function (param) {
              return 0;
            }));
      Curry._1(setoperation, (function (param) {
              return " *";
            }));
      
    };
    var handlesub = function (param) {
      Curry._1(sublabel, (function (param) {
              return state;
            }));
      Curry._1(setState, (function (param) {
              return 0;
            }));
      Curry._1(setoperation, (function (param) {
              return " -";
            }));
      
    };
    var handleadd = function (param) {
      Curry._1(sublabel, (function (param) {
              return state;
            }));
      Curry._1(setState, (function (param) {
              return 0;
            }));
      Curry._1(setoperation, (function (param) {
              return " +";
            }));
      
    };
    var handleDivisionone = function (param) {
      Curry._1(setState, (function (param) {
              return 1 / state;
            }));
      Curry._1(setoperation, (function (param) {
              return " ";
            }));
      
    };
    var handlesqrt = function (param) {
      Curry._1(setState, (function (param) {
              return state * state;
            }));
      Curry._1(setoperation, (function (param) {
              return " ";
            }));
      Curry._1(sublabel, (function (param) {
              return 0;
            }));
      
    };
    var handlesqrt1 = function (param) {
      Curry._1(setState, (function (param) {
              return Math.sqrt(state);
            }));
      Curry._1(setoperation, (function (param) {
              return " ";
            }));
      Curry._1(sublabel, (function (param) {
              return 0;
            }));
      
    };
    var equal = function (param) {
      switch (operation) {
        case "" :
            Curry._1(setState, (function (param) {
                    return 0;
                  }));
            break;
        case " *" :
            Curry._1(setState, (function (param) {
                    return plabel * state;
                  }));
            break;
        case " +" :
            Curry._1(setState, (function (param) {
                    return plabel + state;
                  }));
            break;
        case " -" :
            Curry._1(setState, (function (param) {
                    return plabel - state;
                  }));
            break;
        case " /" :
            Curry._1(setState, (function (param) {
                    return plabel / state;
                  }));
            break;
        default:
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "App.res",
                  23,
                  4
                ],
                Error: new Error()
              };
      }
      Curry._1(setoperation, (function (param) {
              return " ";
            }));
      Curry._1(sublabel, (function (param) {
              return 0;
            }));
      
    };
    return React.createElement("div", {
                style: {
                  display: "grid",
                  justifyContent: "center"
                }
              }, React.createElement("div", {
                    style: {
                      backgroundColor: "rgba(0, 0, 0, .75)",
                      height: "90",
                      width: "360",
                      justifyContent: "center"
                    }
                  }, React.createElement("h2", {
                        style: {
                          fontSize: "10",
                          fontStyle: "Italic"
                        }
                      }, plabel, React.createElement("span", undefined, operation)), React.createElement("h1", {
                        style: {
                          fontSize: "20",
                          fontStyle: "Italic"
                        }
                      }, state)), React.createElement("div", {
                    style: {
                      border: "10px solid White",
                      width: "360px"
                    }
                  }, React.createElement("button", {
                        style: button,
                        onClick: handlereset
                      }, React.createElement("h1", undefined, "CE")), React.createElement("button", {
                        style: button,
                        onClick: handleresetall
                      }, React.createElement("h1", undefined, "C")), React.createElement("button", {
                        style: button,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return (state | 0) / 10 | 0;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "DEL")), React.createElement("button", {
                        style: button1,
                        onClick: handleDivisionone
                      }, React.createElement("h1", undefined, "1/x")), React.createElement("button", {
                        style: button1,
                        onClick: handlesqrt
                      }, React.createElement("h1", undefined, "x2")), React.createElement("button", {
                        style: button1,
                        onClick: handlesqrt1
                      }, React.createElement("h1", undefined, "raiz")), React.createElement("button", {
                        style: button1,
                        onClick: handleDivision
                      }, React.createElement("h1", undefined, "/")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 7;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "7")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 8;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "8")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 9;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "9")), React.createElement("button", {
                        style: button1,
                        onClick: handlemultiplic
                      }, React.createElement("h1", undefined, "*")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 4;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "4")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 5;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "5")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 6;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "6")), React.createElement("button", {
                        style: button1,
                        onClick: handlesub
                      }, React.createElement("h1", undefined, "-")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 1;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "1")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 2;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "2")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10 + 3;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "3")), React.createElement("button", {
                        style: button1,
                        onClick: handleadd
                      }, React.createElement("h1", undefined, "+")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * -1;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "+/-")), React.createElement("button", {
                        style: button1,
                        onClick: handlemultiplic
                      }, React.createElement("h1", undefined, ".")), React.createElement("button", {
                        style: button1,
                        onClick: (function (param) {
                            return Curry._1(setState, (function (param) {
                                          return state * 10;
                                        }));
                          })
                      }, React.createElement("h1", undefined, "0")), React.createElement("button", {
                        style: button1,
                        onClick: equal
                    }, React.createElement("h1", undefined, "="))));
}
function App() {
  <Apppf/>  
}


exports.button = button;
exports.button1 = button1;
exports.Button = Button;
exports.make = make;
/* react Not a pure module */
