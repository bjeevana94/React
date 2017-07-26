"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Button(props) {
  return React.createElement(
    "button",
    {
      style: {
        padding: "15px 102px",
        backgroundColor: "#47cf73",
        color: "white"
      },
      onClick: function onClick() {
        props.reset();
      }
    },
    "Reset"
  );
}

function Question(props) {
  return React.createElement(
    "h1",
    { style: { color: "red" } },
    props.question
  );
}

var Choices = function (_React$Component) {
  _inherits(Choices, _React$Component);

  function Choices(props) {
    _classCallCheck(this, Choices);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Choices.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        {
          style: { padding: "15px 102px" },
          onClick: function onClick() {
            return _this2.props.clickHandler(_this2.props.options, _this2.props.counter);
          }
        },
        this.props.options
      )
    );
  };

  return Choices;
}(React.Component);

var Main = function (_React$Component2) {
  _inherits(Main, _React$Component2);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this3 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this3.state = {
      question: ["What is 2+2?", "what is 5+5?", "what is 6+5?", "what is 1+5?"],
      options: [[1, 4, 3, 2], [10, 0, 0, 0], [11, 10, 0, 6], [11, 10, 0, 6]],
      ans: [4, 10, 11, 6],
      correct: 0,
      incorrect: 0,
      counter: 0
    };
    _this3.clickHandler = _this3.clickHandler.bind(_this3);
    _this3.reset = _this3.reset.bind(_this3);
    return _this3;
  }

  Main.prototype.clickHandler = function clickHandler(ans, counter) {
    if (ans == this.state.ans[this.state.counter]) {
      this.setState(function (prevState, props) {
        return {
          correct: prevState.correct + 1,
          counter: prevState.counter + 1
        };
      });
    } else {
      this.setState(function (prevState, props) {
        return {
          incorrect: prevState.incorrect + 1,
          counter: prevState.counter + 1
        };
      });
    }
  };

  Main.prototype.reset = function reset() {
    this.setState({ counter: 0, correct: 0, incorrect: 0 });
  };

  Main.prototype.render = function render() {
    return this.state.counter <= 3 ? React.createElement(
      "center",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(Question, {
          correct: this.state.correct,
          question: this.state.question[this.state.counter],
          counter: this.state.counter
        }),
        React.createElement(Choices, {
          options: this.state.options[this.state.counter][0],
          clickHandler: this.clickHandler,
          counter: this.state.counter
        }),
        " ",
        React.createElement("br", null),
        React.createElement(Choices, {
          options: this.state.options[this.state.counter][1],
          clickHandler: this.clickHandler,
          counter: this.state.counter
        }),
        " ",
        React.createElement("br", null),
        React.createElement(Choices, {
          options: this.state.options[this.state.counter][2],
          clickHandler: this.clickHandler,
          counter: this.state.counter
        }),
        " ",
        React.createElement("br", null),
        React.createElement(Choices, {
          options: this.state.options[this.state.counter][3],
          clickHandler: this.clickHandler,
          counter: this.state.counter
        }),
        " ",
        React.createElement("br", null),
        React.createElement(
          "h1",
          null,
          " Correct: ",
          this.state.correct
        ),
        React.createElement(
          "h1",
          null,
          " Incorrect: ",
          this.state.incorrect,
          " "
        ),
        React.createElement(Button, { reset: this.reset })
      ),
      " "
    ) : React.createElement(
      "center",
      null,
      " ",
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " Quiz Completed "
        ),
        React.createElement(
          "h1",
          null,
          " Correct: ",
          this.state.correct
        ),
        React.createElement(
          "h1",
          null,
          " Incorrect: ",
          this.state.incorrect,
          " "
        ),
        React.createElement(Button, { reset: this.reset })
      )
    );
  };

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));