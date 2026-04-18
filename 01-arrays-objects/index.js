// Входные данные от API
const apiUsers = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', is_active: true },
  { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', is_active: false },
];

// Нужно получить:
// [
//   { id: 1, fullName: 'John Doe', email: 'john@example.com', active: true },
//   { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', active: false },
// ]
