import Component from "../core/component.js";

class Loading extends Component {
  constructor(props) {
    super(props);

    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    console.log(this.state);
    const { isLoading } = this.state;
    this.$element.innerHTML = `
            <div class="content">
                <img src="./assets/nyan-cat.gif">
            </div>
        `;
    this.$element.style.display = isLoading ? "block" : "none";
  }
}
export default Loading;
