import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // name could be email or password
    // we are doing it dynamically without makig two functions for each
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with email</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id=""
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label> Email</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
