async function signup(name, email, password) {
  if (!name || !email || !password) {
    return "Empty inputs";
  }

  const reqBody = {
    name: name,
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(reqBody),
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
  };

  const signupUrl = "http://127.0.0.1:5505/users/auth/signup";

  const data = await fetch(signupUrl, options);
  const responce = await data.json();
  return responce;
}

async function login(email, password) {
  if (!email || !password) {
    return "Empty inputs";
  }

  const reqBody = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(reqBody),
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials": "true",
      // "access-control-expose-headers": "Set-Cookie",
      Authorization: "Bearer=" + localStorage.getItem("token"),
    },
  };

  const loginUrl = "http://127.0.0.1:5505/users/auth/login";

  const data = await fetch(loginUrl, options);
  const responce = await data.json();
  // cookues.set('jwt', responce.token)
  console.log(responce.user);
  localStorage.setItem("name", responce.name);
  localStorage.setItem("user", responce.user);
  localStorage.setItem("token", responce.token);

  return responce;
}

function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

module.exports = {
  signup,
  login,
  logout,
};
