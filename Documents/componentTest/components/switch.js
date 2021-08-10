import Component from "../core/component.js";

class Switch extends Component {
  constructor(props) {
    super(props);

    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    const { isDarkMode } = this.state;
    this.$element.innerHTML = `
        <input type="checkbox"${isDarkMode ? "checked" : ""}>
        <span class="slider round"></span>
    `;
  }
}

export default Switch;
