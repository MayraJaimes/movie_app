import React from "react";

export const SignUp = props => (
  <form class="form-signin" id="signup" name="signup" method="POST" action="/signup">
      <h2 class="form-signin-heading">Sign Up!</h2>
      <input type="email" class="form-control" name="email" placeholder="Email Address" autofocus="" required />
      <input type="text" class="form-control" name="firstname" placeholder="First Name" required="" autofocus="" />
      <input type="text" class="form-control" name="lastname" placeholder="Last Name" required="" autofocus="" />
      <input type="password" class="form-control" name="password" pattern=".{5,10}" title="Password must be between 5 to 10 characters"  placeholder="Password" required="" />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
  </form>
);