import React, {Component} from 'react';
import "./Header.css"
import axios from "axios";


class Header extends Component {

    num=0;

    state={tmp:''}

    handleKeyUp=(event)=>{
        const {keyCode,target}=event;
        if(keyCode!==13)return;
        if(target.value.trim()===""){
            alert("输入不能为空")
            return;
        }


        const todoObj={id:Date.now(),item:target.value,completed:0}
        axios.post('/todo', todoObj).then(res=>{
            if(res.data.code===1001){
                alert("不能重复输入，请检查todo列表")
            }
            this.props.add()
            target.value=""
        }).catch(err=>{
            console.log(err)
            window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
        })
    }

    inputChange=()=>{
        let val = this.refs.input.value;
        this.setState({tmp:val})
    }

    handleClick=()=>{
        const val = this.state.tmp
        if(val.trim()===""){
            alert("输入不能为空")
            return;
        }
        const todoObj={id:Date.now(),item:val,completed:0}
        axios.post('/todo', todoObj).then(res=>{
            if(res.data.code===1001){
                alert("不能重复输入，请检查todo列表")
            }
            this.props.add()
            this.refs.input.value="";
        }).catch(err=>{
            console.log(err)
            window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
        })

        //this.props.add(todoObj)
        //this.refs.input.value="";

    }

    render() {
        return (

                <div className="todo-header">
                    <div className="todo-sub">
                    <input ref="input" onChange={this.inputChange} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                    <button className="btn-add" onClick={this.handleClick}>添加任务</button>
                    </div>
                </div>

        );
    }
}

export default Header;