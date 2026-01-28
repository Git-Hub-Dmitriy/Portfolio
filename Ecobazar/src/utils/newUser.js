import { users } from "@data/users";

export default function newUser(newUser) {
  const foundUser = users.find(
    (user) => user.login.toLowerCase() === newUser.login.toLowerCase()
  );
  if (!foundUser) {
    users.push({
      id: users.length + 1,
      login: newUser.login.toLowerCase(),
      password: newUser.password.toLowerCase(),
    });
  } else {
    return;
  }
}
