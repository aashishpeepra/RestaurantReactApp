import React,{Component} from 'react';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Order from '../OrderOnline/OrderOnline';
import Cart from '../Cart/Cart';
import {Switch,Route} from 'react-router-dom';
import Offer from '../Offer/Offer';
import axios from 'axios';
import ForLoad from '../../Components/miscelleous/forLoad';
class allClass extends Component{
    state={
        item:[],
        data:[],
        loaded:false
      };
      componentDidMount(){
        axios.get("https://twobrother0927.firebaseio.com/.json").then((data)=>{
            this.setState({data:data.data,loaded:true});
        }).catch(err=>console.log("Some Error")).then(console.log("Lets trye this "));
      }
      addItem=(obj)=>{
          let extra=[...this.state.item];
          var check=false;
          extra.forEach(element=>{
              if(element.head===obj.head){
                check=true;  
                element.counter+=1;
              }

          });
          if(!check){
            extra.push(obj);
          }
          
          this.setState({item:extra});
          
          alert(`${obj.head} is added to your cart`);
      }
      removeItem=(obj)=>{
        var copy=[...this.state.item];
        var check=false;
        let pos=-1;
        copy.forEach(element=>{
            
            if(element.head===obj.head && element.counter>=1 ){
                element.counter=element.counter-1;
                check=true;
            }
            pos+=1;
        });
        if(check){
            
            if(copy[pos].counter===0){
                copy=copy.slice(0,pos).concat(copy.slice(pos+1));
                
            }
        }
        this.setState({item:copy});
        
      }
      
    render(){
        
        const ddt=this.state.loaded?(
            <div>
            <Switch>
                <Route path="/offers" component={()=><Offer count={this.state.item.length} data={this.state.data.offers.offer} board={this.state.data.offers.board}/>}/>
   <Route path="/cart" component={()=><Cart adding={()=>this.addItem} remove={()=>this.removeItem} data={this.state.item}/> }/>
   <Route path="/menu" component={()=><Menu inbox={this.state.item.length} data={this.state.data.menu} loaded={this.state.loaded} adding={()=>this.addItem}/>}/>
   <Route path="/order" component={()=><Order count={this.state.item.length} data={this.state.item}/>}/>
   <Route path="/" component={()=><Home count={this.state.item.length} data={this.state.data.offers.home}/>}/>
   
   </Switch>
       </div>
        ):<ForLoad/>;
        return(
           ddt
        );
    }
}

export default allClass;

