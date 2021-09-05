import Component from "../core/component.js";
import Breadcrumb from "./breadcrumb.js";
import Node from "./Node.js";
import Loading from "./Loading.js";
import fetchAPI from "../api.js";
import ImageModal from "./ImageModal.js";

class App extends Component {
  constructor(props) {
    super(props);

    //로딩화면
    this.loading = new Loading({
      $target: this.$target,
      tagName: "div",
      initialState: {
        isLoading: this.state.isLoading,
      },
    });

    //이미지 모달
    this.imageModal = new ImageModal({
      $target: this.$target,
      tagName: "div",
      initialState: {
        selectedFile: this.state.selectedFile,
      },
      onclick: (close) => {
        if (close) this.setState({ selectedFile: [{ isVisible: false }] });
      },
    });

    this.breadcrumb = new Breadcrumb({
      $target: this.$element,
      tagName: "nav",
      initialState: {
        isRoot: this.state.isRoot,
        depth: this.state.depth,
      },
    });

    this.nodes = new Node({
      $target: this.$element,
      tagName: "ul",
      initialState: {
        isRoot: this.state.isRoot,
        node: this.state.node,
        isLoading: this.state.isLoading,
      },
      onRoot: async () => {
        this.loading.setState({ isLoading: true });
        const rootNode = await fetchAPI.fetchRoot();
        this.loading.setState({ isLoading: false });
        this.setState({
          node: rootNode,
          isRoot: true,
        });
      },
      onclick: async (node) => {
        try {
          if (node.type === "DIRECTORY") {
            //선택한 노드의 디렉토리 안으로 이동
            this.loading.setState({ isLoading: true });
            //선택한 노드 안에 들어있는 데이터
            const selectedNodeData = await fetchAPI.getByDirectoryID(node.id);
            this.loading.setState({ isLoading: false });

            //선택된 데이터 state에 저장
            this.setState({
              depth: [
                ...this.state.depth,
                {
                  id: node.id,
                  name: node.name,
                },
              ],
              node: selectedNodeData,
              isRoot: false,
            });
          } else if (node.type === "FILE") {
            //클릭된 파일 모달로 열기
            this.setState({
              ...this.state,
              selectedFile: {
                path: node.filePath,
                name: node.name,
                isVisible: true,
              },
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
      onBackClick: async () => {
        try {
          const copyState = { ...this.state };
          copyState.depth.pop();
          const prevNodeId =
            copyState.depth.length === 0
              ? null
              : copyState.depth[copyState.depth.length - 1].id;
          if (prevNodeId === null) {
            //루트 노드로 돌아온 경우
            this.loading.setState({ isLoading: true });
            const rootNode = await fetchAPI.fetchRoot();
            this.loading.setState({ isLoading: false });
            this.setState({
              ...copyState,
              node: rootNode,
              isRoot: true,
            });
          } else {
            this.loading.setState({ isLoading: true });
            const prevNodeData = await fetchAPI.getByDirectoryID(prevNodeId);
            this.loading.setState({ isLoading: false });
            this.setState({
              ...copyState,
              node: prevNodeData,
              isRoot: false,
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
    });

    this.$element.className = "App";
    this.$target.appendChild(this.$element);
    this.renderComponent();
  }

  render() {
    this.nodes.setState(this.state);
    this.breadcrumb.setState(this.state);
    this.imageModal.setState(this.state);
  }
}

export default App;
