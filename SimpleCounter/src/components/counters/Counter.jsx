import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0    //initial value
        }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
    }

    render() {
        return (
          <div className="App">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            
            <span className='count'>{this.state.counter}</span>
            <div><button className="resetbutton" onClick={this.reset}>Reset</button></div>

          </div>
        )
      }
      reset()
      {
        this.setState({
            counter:0
        });
      }

      increment(by)
      {
          this.setState({
              counter:this.state.counter+by
          });
      }

      decrement(by)
      {
          this.setState({
              counter:this.state.counter-by
          });
      }
}


class CounterButton extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         counter:0    //initial value
    //     }
    // this.increment=this.increment.bind(this);
    // this.decrement=this.decrement.bind(this);
    // }
    render()
    {
        return(
            <div className='counter'>
                <button className="countbutton"onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button className="countbutton" onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
    // increment()
    // {
    //     this.setState(
    //         (prevstate)=>{
    //         return {counter:prevstate.counter+this.props.by}
    //     }
    //     );
    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement()
    // {
    //     this.setState(
    //         (prevstate)=>{
    //         return {counter:prevstate.counter-this.props.by}
    //     }
    //     );
    //     this.props.decrementMethod(this.props.by);
    // }

    
}
export default Counter