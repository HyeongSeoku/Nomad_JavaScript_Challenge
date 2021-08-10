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
      const prevState = this.state;
      this.state = { ...this.state, ...newState };
      console.log(
        "State Upated!:",
        "prev State: ",
        prevState,
        "New State: ",
        newState
      );
      this.renderComponent();
    }
  
    renderComponent() {
      this.updateDOM();
      this.render();
    }
  
    updateDOM() {
      Object.entries(this.props)
        .filter(([key]) => !key.startsWith("on"))
        .forEach(([key, prop]) => {
          if (key === "className") {
            this.$element.classList.add(prop);
            return;
          }
  
          this.$element[key] = prop;
        });
  
      Object.entries(this.props)
        .filter(([key]) => key.startsWith("on"))
        .forEach(([key, prop]) => {
          const eventType = key.toLowerCase().substring(2);
          this.$element.addEventListener(eventType, prop);
        });
    }
  }
  
  export default Component;
  