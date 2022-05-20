import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { closeModal, login } from "../../redux/loginSlice";
//import { ToastMessage } from "../ui/ToastMessage";

export const LoginScreen = () => {
  
  const [formValues, handleInputChange] = useForm({email: "", password: "" });
  const { email, password } = formValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    /**
     * Nota: es conveniente poner e.preventDefault() para el submit de un formulario,
     * ya que el browser arroja el error "Form submission canceled because the form is
     * not connected"
     */
    e.preventDefault();
    dispatch(login());
    dispatch(closeModal());
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <div className="row">
        <form onSubmit={handleLogin}>
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
            required
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
            required
          />
          <button className="btn btn-dark mt-2" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};
