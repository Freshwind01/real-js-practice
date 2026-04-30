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


## Задача 1.3: Удаление дубликатов из массива объектов 🟡
**Контекст: После слияния данных из разных источников появились дубликаты пользователей по email.

**Задача:**

const users = [
  { id: 1, email: 'john@example.com', name: 'John' },
  { id: 2, email: 'jane@example.com', name: 'Jane' },
  { id: 3, email: 'john@example.com', name: 'Johnny' }, // дубликат
  { id: 4, email: 'bob@example.com', name: 'Bob' },  
  { id: 5, email: 'mary@example.com', name: 'Mary' },
  { id: 6, email: 'bob@example.com', name: 'Bob' }, // дубликат
  { id: 7, email: 'piter@example.com', name: 'Piter' }
];

// Оставить уникальные по email (первое вхождение)*/
const seen= new Set()
const uniqueUsers= users.filter(user => {
    if (seen.has(user.email)) {
        return false;
    }
    seen.add(user.email);
    return true;
})
console.log(uniqueUsers);
