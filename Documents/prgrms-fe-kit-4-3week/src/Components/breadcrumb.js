import Component from "../core/component.js"

class Breadcrumb extends Component{
    constructor(props){
        super(props);
        
        this.$target.appendChild(this.$element);
        this.renderComponent();
    }

    render(){
        this.$element.innerHTML = `
            <div class="nav-item">root</div>
        `
    }

}
export default Breadcrumb;