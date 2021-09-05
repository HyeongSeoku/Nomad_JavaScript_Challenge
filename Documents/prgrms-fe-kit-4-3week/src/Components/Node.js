import Component from "../core/component.js";

class Node extends Component {
  constructor(props) {
    super(props);

    this.$element.className = "Nodes";
    this.$target.appendChild(this.$element);
    this.onclick = props.onclick; //App의 onclick 메소드
    this.onBackClick = props.onBackClick; //App의 onBackClick 메소드
    this.renderComponent();
    props.onRoot();
  }

  render() {
    const { node } = this.state;

    const nodeTemplate = node
      .map((item) => {
        return `
            <li class="Node" data-id ="${item.id}">
                <img src=${
                  item.type === "DIRECTORY"
                    ? "./assets/directory.png"
                    : "./assets/file.png"
                } >
                <div>${item.name}</div>
            </li>
        `;
      })
      .join("");
    this.$element.innerHTML = this.state.isRoot
      ? nodeTemplate
      : `<li class="Node"><img src="/assets/prev.png"></li>${nodeTemplate}`;
    this.onClickNode();
  }

  //각 Node li Element에 이벤트 연결해주기 위해 작성
  onClickNode() {
    document.querySelectorAll(".Node").forEach((item) => {
      item.addEventListener("click", (event) => {
        const nodeId = event.currentTarget.dataset.id;
        const selectedNode = this.state.node.find((obj) => obj.id === nodeId);

        if (!nodeId) {
          //nodeId가 없는 경우 뒤로가기 클릭한것.
          this.onBackClick();
        }
        if (selectedNode) {
          this.onclick(selectedNode);
        }
      });
    });
  }
}

export default Node;
