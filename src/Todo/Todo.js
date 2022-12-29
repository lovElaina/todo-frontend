import React, {Component} from 'react';
import './Todo.css'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import axios from "axios";

class Todo extends Component {

    constructor(props) {
        super(props);
        //this.state = {todos:[{id:123,name:"dwwdw",done:true},{id:456,name:"qwergv",done:false}]}
        this.state = {todos:[]}
    }

    refresh = () => {
        axios.get('/todo').then(res=>{
            console.log(res.data.data);
            this.setState({todos:res.data.data})
        }).catch(err=>{
            console.log(err)
            window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
        })
    }

    componentDidMount() {
        this.refresh()
    }

    //state = {todos:JSON.parse(localStorage.getItem("key"))}

    //state = {todos:[]}

    addTodo=()=>{
        this.refresh()
    }

    updateTodo=(id)=>{
        axios.put(`/todo/${id}`).then(res=>{
            console.log(res);
            this.refresh()
        }).catch(err=>{
            console.log(err)
            window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
        })



        // const{todos}=this.state;
        // const newTodos=todos.map((todoObj)=>{
        //         if(todoObj.id===id)return {...todoObj,completed:isdone};
        //         else return todoObj;
        //     }
        // )
        // this.setState({todos: newTodos});

    }

    deleteTodo=(id)=>{
        axios.delete(`/todo/${id}`).then(res=>{
            console.log(res);
            this.refresh()
        }).catch(err=>{
            console.log(err)
            window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
        })

    }

    checkAllTodo=(isdone)=>{
        const {todos}=this.state;
        todos.forEach((todoObj)=>{
            if(todoObj.completed !== isdone){
                axios.put(`/todo/${todoObj.id}`).then(res=>{
                    this.refresh()
                }).catch(err=>{
                    console.log(err)
                    window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
                })
            }
        })
    }

    deleteAllTodo=()=>{
        const {todos}=this.state
        todos.forEach((todoObj)=>{
            if(todoObj.completed === 1){
                axios.delete(`/todo/${todoObj.id}`).then(res=>{
                    this.refresh()
                }).catch(err=>{
                    console.log(err)
                    window.confirm("系统异常，请联系作者：张一琛，或按F12查看报错信息")
                })
            }
        })

    }



    render() {

        const {todos}=this.state

        return (
                <div className="todo-container">
                    <div className="todo-logo">
                        Todo-List
                    </div>

                    <div className="todo-wrap">
                        <Header add={this.addTodo}/>
                        <List todosq={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo}/>
                    </div>
                </div>

        );
    }
}

export default Todo;
