const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  checkValidPoem() {
    return this.validLines() && this.validLineOne() & this.validLineTwo() && this.validLineThree()
  }

  validLines() {
    return this.state.value.split("\n").length === 3
  }

  validLineOne() {
    return this.state.value.split("\n")[0].trim().split(" ").length === 5
  }

  validLineTwo() {
    return this.state.value.split("\n")[1].trim().split(" ").length === 3
  }

  validLineThree() {
    return this.state.value.split("\n")[2].trim().split(" ").length === 5
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange.bind(this)}/>
        {this.checkValidPoem() ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
