import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
        <div>
            <ToDoAppContainer />
        </div>
    );
  }
}
const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})
const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About} />
            <Route path="/inbox" component={Inbox}/>
        </Switch>
      </BrowserRouter>
    </Provider>, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if (module.hot)
  module.hot.accept();