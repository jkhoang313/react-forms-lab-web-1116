const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: "",
      passwordValue: ""
    };
  }

  handleUsername(event) {
    this.setState({
      usernameValue: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      passwordValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.onSubmit && this.state.usernameValue != "" && this.state.passwordValue != "") {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.handleUsername.bind(this)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePassword.bind(this)} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
