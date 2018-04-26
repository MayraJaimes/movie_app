import React from "react";

export const SignIn = props => (
  <form class="form-signin" id="signin" name="signin" method="POST" action="/signin">
      <h2 class="form-signin-heading">Please Sign In</h2>
      <input type="email" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required="" />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
  </form>
);

