import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import './style.scss';

class Filter extends Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = { range: 10 };
  }

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  componentDidUpdate() {
    console.log("did update..");
    // this.props.updateFilters(this.state.range);
  }

  sliderChange = () => {
    console.log("test...");
    console.log(document.getElementById("myRange").value);
    this.setState({ range: document.getElementById("myRange").value });

  }
  setInput = () => {
    console.log("this.state.range....", this.state.range);
    this.setState({ range: document.getElementById("myRange").value });
    let z = this.state.range;
    this.props.updateFilters(z);
  }
  searchText = (event) => {
    console.log(event.target.value);
    this.props.updateFilters(event.target.value);
  }
  render() {
    console.log(this.props.showSlider);
    let html = (<div><h4 className="title">Filters:</h4> <div>

      <input type="range" min="1" max="1000" value={this.state.range} onInput={this.sliderChange} class="slider" id="myRange" />
      <input type="button" value="Apply" onClick={this.setInput} />
    </div></div>);
    return (
      <div className="filters">
        {this.props.showSlider ? html : <input type="text" style={{ marginLeft: 1100, marginTop: 20 }} onChange={this.searchText} />}

      </div>
    );
  }
}

export default connect(
  null,
  { updateFilters }
)(Filter);
