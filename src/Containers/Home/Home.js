import React,{Component} from 'react';
import './Home.css';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import Header from '../../Components/sections/section-header/section';


class Home extends Component{
    state={
        lat:0,
        long:0
    }
    componentWillUpdate(){
        // navigator.geolocation.getCurrentPosition((data)=>{
        //     this.setState({lat:data.coords.latitude,long:data.coords.longitude});
        // })
        // if(this.state.lat!==0 && this.state.long!==0){
        //     let addr="7/M/19 Dabouli ";
        //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyDPb5bW-FxZICNUs9lnFEmegTL_IqEDYsM`).then(data=>console.log(data));
        //     // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.long}&key=AIzaSyDPb5bW-FxZICNUs9lnFEmegTL_IqEDYsM`).then((data)=>console.log(data))
        // }
        
    }
    
    render(){
        return(
            <div>
            <Header data={this.props.data}>
            <Toolbar count={this.props.count}/>
            </Header>
            </div>
        );
    }
   

}

export default Home;