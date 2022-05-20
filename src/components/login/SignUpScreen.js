import React from 'react'
import { useForm } from '../../hooks/useForm';

export const SignUpScreen = () => {
  const [formValues, handleInputChange] = useForm({ name: "", email: "", password: "" });
  const { name, email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Sign up</h1>
      <hr />
      <div className="row">
        <form onSubmit={handleLogin}>
          <label className="form-label" htmlFor="name">
            Name:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleInputChange}
            value={name}
            autoComplete="off"
          />
          <label className="form-label" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={email}
            autoComplete="off"
          />
          <label className="form-label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={password}
            autoComplete="off"
          />
          <button className="btn btn-dark mt-2" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
