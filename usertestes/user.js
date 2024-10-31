const users = [];

function addUser(id, name, active) {
  const user = { id, name, active };
  users.push(user);
  return user;
}

function getUser(id) {
  return users.find(user => user.id === id);
}

module.exports = { addUser, getUser };