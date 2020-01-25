import React,{Component} from 'react';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import Menuheader from '../../Components/menuSections/menuHeader/menuHeader';


class Menu extends Component{
    
    render(){
        let dtr=this.props.loaded?(
            <div>
                
                {/* <Backdrop click={()=>console.log("clicked")}/> */}
                <Menuheader data={this.props.data} adding={this.props.adding()}>
            <Toolbar count={this.props.inbox} />
            </Menuheader>
            </div>
        ):null;
        return(
            <div>
                {dtr}
            </div>
        );
    }
}

export default Menu;