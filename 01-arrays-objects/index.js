//Задача 1.1
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
//Решение:
function TransformUser(users) {
  return users.map(user => ({
    id: user.id,
    fullName: user.first_name + ' ' + user.last_name,
    email: user.email,
    active: user.is_active,
  }));
}

## Задача 1.2: Группировка товаров по категориям 🟢
**Контекст:** У вас есть список товаров, нужно сгруппировать их по категориям для отображения в UI.
**Задача:**
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 50 },
  { id: 3, name: 'Phone', category: 'Electronics', price: 800 },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 80 },
];

// Нужно получить:
// {
//   Electronics: [{ id: 1, name: 'Laptop', price: 1000 }, { id: 3, name: 'Phone', price: 800 }],
//   Clothing: [{ id: 2, name: 'Shirt', price: 50 }, { id: 4, name: 'Jeans', price: 80 }]
// }

//Решение:
function groupCat(products) {
  return products.reduce((acc,currentObject) => {
  const key =currentObject.category;
    if (!acc[key]) {acc[key]=[];}
    delete currentObject.category;
    acc[key].push(currentObject);
    return acc;
                                                },{})
                            }
