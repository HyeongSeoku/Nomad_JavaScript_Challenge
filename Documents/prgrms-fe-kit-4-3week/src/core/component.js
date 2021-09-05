class Component {
  $target;
  props;
  state;
  constructor({ tagName, $target, initialState, ...props }) {
    this.$target = $target;
    this.$element = document.createElement(tagName);
    this.state = initialState;
    this.props = props || {};
  }
  render() {
    //need to override
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.renderComponent();
  }

  renderComponent() {
    this.render();
  }
}

export default Component;
