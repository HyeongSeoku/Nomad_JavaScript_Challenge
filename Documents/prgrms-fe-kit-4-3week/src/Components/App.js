import Component from "../core/component.js";
import Breadcrumb from "./breadcrumb.js";
import Node from "./Node.js";
import Loading from "./Loading.js";
import fetchAPI from "../api.js";
class App extends Component {
  constructor(props) {
    super(props);

    this.loading = new Loading({
      $target: this.$element,
      tagName: "div",
      className: "Modal",
      initialState: this.state,
    });

    this.breadcrumb = new Breadcrumb({
      $target: this.$element,
      tagName: "nav",
      className: "Breadcrumb",
      initialState: this.state,
    });

    this.node = new Node({
      $target: this.$element,
      tagName: "ul",
      className: "Nodes",
      initialState: this.state.node,
    });

    this.$target.appendChild(this.$element);
    this.renderComponent();
    console.log("AppState", this.state);
  }

  async getRootData() {
    this.loading.setState({ isLoading: true });
    const nodePath = await fetchAPI.fetchRoot();
    this.loading.setState({ isLoading: false });
    this.node.setState(...this.state.node, { node: { nodePath } });
    console.log(nodePath);
  }

  render() {
    this.getRootData();
    console.log(this.state);
  }
}

export default App;
