import Component from "../core/component.js";

class Input extends Component {
  constructor(props) {
    super(props);
    this.renderComponent();
    this.$target.appendChild(this.$element);
  }
  render() {
    this.$element.innerHTML = `<input type="text" class="todo-input" placeholder="할 일을 입력해주세요">`;
  }
}
export default Input;
