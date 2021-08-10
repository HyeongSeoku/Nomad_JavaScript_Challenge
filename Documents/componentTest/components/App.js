import Component from "../core/component.js";
import Input from "./input.js";
import Result from "./result.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.tInput = new Input({
      $target: this.$element,
      tagName: "form",
      onSubmit: (e) => {
        e.preventDefault();
        const input = e.target.firstChild;
        if (input.value === "") {
          window.alert("최소 한 글자 이상 입력해 주세요.");
        } else {
          this.setState({
            data: [
              ...this.state.data,
              {
                text: input.value,
                time: new Date(),
                isCompleted: false,
              },
            ],
          });
          input.value = "";
        }
      },
    });

    this.tResult = new Result({
      $target: this.$element,
      tagName: "ul",
      className: "data-result",
      initialState: {
        data: this.state.data,
      },
      onChange: ({
        target: {
          checked,
          dataset: { index: selectedIndex },
        },
      }) => {
        const newState = this.state.data.map((item, index) =>
          // 단항 연산자 + : 피연산자가 숫자가 아닐 경우 피연산자를 숫자로 변환
          +selectedIndex === index ? { ...item, isCompleted: checked } : item
        );
        this.setState({ data: newState });
      },
    });
    this.renderComponent();
    this.$target.appendChild(this.$element);
    console.log("App State ", this.state);
  }

  render() {
    this.tResult.setState({ data: this.state.data });
  }
}

export default App;
