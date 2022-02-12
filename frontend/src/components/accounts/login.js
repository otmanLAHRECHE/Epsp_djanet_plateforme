import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { login_api } from '../../actions/auth';



export class Login extends Component {
  state = {
    email: '',
    password: '',
  };


  onSubmit = async (e) => {
    e.preventDefault();
    console.log("Loggin in with", this.state.email, this.state.email);
    await login_api(this.state.email, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (localStorage.getItem("auth_token")) {
      return <Navigate to="/" />;
    }
    const { email, password } = this.state;
    return (


      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Login;