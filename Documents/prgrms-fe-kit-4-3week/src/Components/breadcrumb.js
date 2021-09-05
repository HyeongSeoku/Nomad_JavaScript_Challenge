import Component from "../core/component.js";

class Breadcrumb extends Component {
  constructor(props) {
    super(props);

    this.$element.className = "Breadcrumb";

    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    const { isRoot, node, depth } = this.state;
    const rootTemplate = `<div class="nav-item">root</div>`;
    const template = depth
      .map((item) => {
        if (item.id !== undefined && item.name !== undefined)
          return `<div class="nav-item" data-id="${item.id}">${item.name}</div>`;
      })
      .join("");

    this.$element.innerHTML = isRoot ? rootTemplate : rootTemplate + template;
  }
}
export default Breadcrumb;
