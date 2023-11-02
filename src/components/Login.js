import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("I submit");
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;

// TODO: look into
// React's event object is a special object called:
// ! SyntheticBaseEvent

// can event.preventDefault(), event.stopPropagation()