const { addUser, getUser } = require('./user');
const { sum } = require('./math');

test('Adicionar um usuário', () => {
  const user = addUser(1, 'John Doe', true);
  expect(user).toEqual({ id: 1, name: 'John Doe', active: true });
});

test('Recuperar informações de um usuário', () => {
  addUser(2, 'Jane Doe', false);
  const user = getUser(2);
  expect(user).toEqual({ id: 2, name: 'Jane Doe', active: false });
});

test('Calcular o total de usuários ativos', () => {
  const activeUsers = users.filter(user => user.active).length;
  const totalActive = sum(activeUsers, 0);
  expect(totalActive).toBe(1);
});