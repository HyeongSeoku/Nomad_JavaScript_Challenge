import Component from "../core/component.js";
import Title from "./title.js";
import Switch from "./switch.js";

class Header extends Component {
  constructor(props) {
    super(props);

    this.title = new Title({
      $target: this.$element,
      tagName: "section",
      className: "title-container",
      onClick: (event) => {
        console.log(event.target.innerText);
      },
    });

    this.darkToggle = new Switch({
      $target: this.$element,
      tagName: "label",
      className: "darkMode-toggler",
      initialState: {
        isDarkMode: this.state.isDarkMode,
      },
      onChange: ({ target: { checked } }) =>
        this.setState({ isDarkMode: checked }),
    });

    this.$target.appendChild(this.$element);
    this.renderComponent();
    console.log("Header State ", this.state);
  }
  render() {
    const { isDarkMode } = this.state;
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
  }
}

export default Header;
