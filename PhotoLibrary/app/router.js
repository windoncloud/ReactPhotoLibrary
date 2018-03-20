import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Login from './containers/index/index';

class Roots extends Component{
    componentWillReceiveProps(nextProps) {
        this.setState({
            children: nextProps.children
        });
    }
    render(){
        return(
            <div>{this.props.children}</div>
        );
    }
}
const RouTe = (
    <Route>
        <Route path='/' component = {Roots}>

            <IndexRoute component={Login}></IndexRoute>

        </Route>


    </Route>
);
export default RouTe;
