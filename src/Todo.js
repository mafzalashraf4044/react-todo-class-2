import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task: {value: '', isEdit: false},
            tasks: [],
        };
    }

    //in JS this keyword in a function always points to the caller
    handleTaskChange = (e) => {
        const value = e.target.value;

        this.setState({
            task: {value: value, isEdit: false},
        });
    }

    addTask = (e) => {
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            const tasks = this.state.tasks;
            tasks.push(this.state.task);
    
            this.setState({
                tasks: tasks,
                task: {value: '', isEdit: false},
            });
        }
    }

    toggleEdit = (index) => {
        const tasks = this.state.tasks;
        tasks[index].isEdit = !tasks[index].isEdit;
        
        this.setState({
            tasks: tasks,
        });
    }

    handleTaskEdit = (e, index) => {
        const tasks = this.state.tasks;
        tasks[index].value = e.target.value;
        
        this.setState({
            tasks: tasks,
        });
    }
    
    dltTask = (index) => {
        const tasks = this.state.tasks;
        tasks.splice(index, 1);

        this.setState({
            tasks: tasks,
        });
    }

    /* 
        for using es5 function, this is undefined, so we have to bind it 
        handleTaskChange() {
            console.log("this in normal function", this);
        }

        sync vs async
        var fs = require('fs');

        var data = fs.readFileSync('./text.txt');

        fs.readFileAsync((res) => {
            res
        });

    */

    render() {
        return(
            <div className="container todo-list">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="add-task">
                            <div class="form-group">
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={this.state.task.value}
                                        onChange={this.handleTaskChange}
                                        onKeyUp={this.addTask}
                                    />
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        className="btn btn-block btn-default"
                                        onClick={this.addTask}
                                    >Add Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="tasks-list" style={{
                            margin: '15px',
                        }}>
                            <ul class="list-group">
                                {
                                    this.state.tasks.map((task, index) => {
                                        return (
                                            <li class="list-group-item" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}>
                                                {
                                                    !task.isEdit ?
                                                    <span style={{
                                                        fontWeight: 'bold',
                                                    }}>{task.value}</span> :
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={task.value}
                                                        style={{width: '30%'}}
                                                        onChange={(e) => this.handleTaskEdit(e, index)}  
                                                    />
                                                }
                                                <div className="actions">
                                                    {
                                                        !task.isEdit ?
                                                        <button
                                                            className="btn btn-primary"
                                                            style={{marginRight: '5px'}}
                                                            onClick={() => this.toggleEdit(index)}
                                                        >Edit</button> :
                                                        <button
                                                            className="btn btn-info"
                                                            style={{marginRight: '5px'}}
                                                            onClick={() => this.toggleEdit(index)}
                                                        >Save</button>
                                                    }
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => this.dltTask(index)}
                                                    >Delete</button>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;