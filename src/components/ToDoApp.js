import React from 'react';
import List from './List';
import Input from './Input';
import { NavLink, Route, Switch } from 'react-router-dom';

const selected = {color: 'red'}

const Header = React.createClass({
    render() {
        return <h3>i am Header</h3>
    }
})

const Job = React.createClass({
    render() {
        return <h2>i have a job</h2>
    }
})

class ToDoApp extends React.Component {

  onInputChange = (event) => {
    this.props.inputChange(event.target.value);
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.inputSubmit();
  };

  onListItemClick = (i) => {
    this.props.listItemClick(i)
  };

  deleteListItem = (i) => {
    this.props.deleteListItem(i)
  };
    componentDidMount() {
    }
    render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
                <Switch>
                    <Route  path={`job/:id`} component={Job}/>
                    <Route exact path="/" component={Header}/>
                </Switch>
                <NavLink to={`job/myjob`} activeClassName="selected">跳转到jobs</NavLink>
              <List
                onClick={this.onListItemClick}
                listItems={this.props.toDoApp.list}
                deleteListItem={this.deleteListItem}
              />
              <Input
                value={this.props.toDoApp.newToDo}
                onChange={this.onInputChange}
                onSubmit={this.onInputSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;