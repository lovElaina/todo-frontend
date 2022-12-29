import React, {Component} from 'react';
import Item from "../Item/Item";
import "./List.css"
class List extends Component {

    render() {
        let i=0;
        let arr=[];
        const {todosq,updateTodo,deleteTodo} = this.props;



        /*for(i;i<todosq.length;i++){
            arr.push(<Item key={todosq[i].id} id={todosq[i].id} name={todosq[i].name} done={todosq[i].done} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
        }*/

        return (

                <ul className="todo-main">
                    {
                        todosq.map(todo => {
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        })

                    }
                    {/*{arr}*/}
                </ul>

        );
    }
}

export default List;