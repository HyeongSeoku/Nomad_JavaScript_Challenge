import Component from "../core/component.js";

class Node extends Component {
  constructor(props) {
    super(props);

    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    console.log(this.state);
    this.$element.innerHTML = `
            <li class="Node"></li>
        `;
  }
}

export default Node;
