import React, {Component} from 'react';
import "./Item.css"
class Item extends Component {

    state={mouse:false}

    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck=(id)=>{
        return (event)=>{
            //this.props.updateTodo(id,event.target.checked ? 1 : 0)
            this.props.updateTodo(id)
        }
    }

    handleDelete=(id)=>{
        if(window.confirm("确定要删除吗")){
            this.props.deleteTodo(id)
        }
    }

    render(){

        const {id,completed,item}=this.props;

        return (

                <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}}
                    onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={completed === 1} onChange={this.handleCheck(id)}/>
                        <span>{item}</span>
                    </label>
                    <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>删除</button>
                </li>

        );
    }
}

export default Item;