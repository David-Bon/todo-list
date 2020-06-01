import React, {Component} from "react";
import {connect} from "react-redux";
import Todo from "./todo";
import {onToggleDoneAction} from "../../actions/action";
class TodoContainer extends Component {

    render() {
const {todo, onToggleDoneAction} = this.props;
        return <Todo onToggleDoneAction={onToggleDoneAction} todo={todo}/>
    }
}
const mapStateToProps = (state) => ({
    todo: state.todo
});
const mapDispatchToProps={
    onToggleDoneAction
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)