import Component from "../core/component.js";

class Title extends Component {
  constructor(props) {
    super(props);
    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    this.$element.innerHTML = `
        <span>Title</span>
      `;
  }
}

export default Title;
