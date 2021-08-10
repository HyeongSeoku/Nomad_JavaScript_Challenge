import Component from "../core/component.js";

class Result extends Component {
  constructor(props) {
    super(props);
    this.renderComponent();
    this.$target.appendChild(this.$element);
  }

  render() {
    const {
      $element,
      state: { data },
    } = this;
    this.$element.innerHTML = data
      .map(
        (item, index) =>
          `<li className="item-container">
        <span class="item-text">${item.text}</span>
        <span class="item-time">${item.time}</span>
        <input data-index="${index}" type="checkbox"${
            item.isCompleted ? "checked" : ""
          }/>
    </li>`
      )
      .join("");
  }
}

export default Result;
