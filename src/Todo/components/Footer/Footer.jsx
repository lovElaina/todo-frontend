import React, {Component} from 'react';
import "./Footer.css"

class Footer extends Component {

    handleCheck=(event)=>{
        this.props.checkAllTodo(event.target.checked ? 1 : 0);
    }

    handleDeleteAll=()=>{
        if(window.confirm("确定要删除全部勾选的任务吗")){
            this.props.deleteAllTodo()
        }
    }

    render() {

        const {todos}=this.props
        let allCount = todos.length
        let curCount = 0
        for(let i=0;i<allCount;i++){
            if(todos[i].completed===1){
                curCount++;
            }
        }

        return (

                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={allCount === curCount && allCount!==0} onChange={this.handleCheck}/>
                    </label>
                    <span>
                            <span>完成{curCount}</span> / 全部{allCount}
                            </span>
                    <button className="btn btn-danger" onClick={this.handleDeleteAll}>清除已完成任务</button>
                </div>

        );
    }
}

export default Footer;