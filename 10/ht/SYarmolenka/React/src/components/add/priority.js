import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handlerSelectComponent} from '../../helpers';
import {changePriority} from '../../actions/add.js';

class Priority extends Component {
  constructor (props) {
    super(props);
    this.priorities = this.getPriorityList();
  };
  getPriorityList () {
    return ['Low', 'Medium', 'High'].map((item, i) => {
      return <option key={item} value={i}>{item}</option>
    });
  };
  render () {
    return (
      <select value={this.props.priority}
        onChange={e => handlerSelectComponent(e.target, this.props.changePriority.bind(this))}>
        {this.priorities}
      </select>
    );
  }
};

export default connect(
  state => ({
    priority: state.add.get('priority')
  }),
  {changePriority}
)(Priority);