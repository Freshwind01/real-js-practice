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
//Решение:
const seen= new Set()
const uniqueUsers= users.filter(user => {
    if (seen.has(user.email)) {
        return false;
    }
    seen.add(user.email);
    return true;
})
console.log(uniqueUsers);




/*Задача 1.4: Фильтрация и сортировка списка товаров 🟢
Контекст: Пользователь применил фильтры и сортировку в каталоге товаров.

Задача:*/

const products = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1800, inStock: true },
  { id: 2, name: 'Laptop Air', category: 'Electronics', price: 1200, inStock: false },
  { id: 3, name: 'Mouse', category: 'Accessories', price: 50, inStock: true },
  { id: 4, name: 'Keyboard', category: 'Accessories', price: 100, inStock: true },
  { id: 5, name: 'Air Max', category: 'Electronics', price: 9000, inStock: false },
  { id: 6, name: 'Chessmaster Notebook', category: 'Electronics', price: 1500, inStock: true },
  { id: 7, name: 'Sonybook', category: 'Electronics', price: 2300, inStock: true },
  { id: 8, name: 'HyundaiMouse', category: 'Electronics', price: 2300, inStock: true },
  { id: 9, name: 'OppoMasterPhone', category: 'Electronics', price: 1300, inStock: true },
];

// Создать функцию: filterAndSort(products, filters, sortBy)

const filters = { category: 'Electronics', inStock: true, minPrice: 1000 };
const sortBy = 'price';
//Решение:
function filterAndSort(products, filters, sortBy) {
  const result = products
    .filter(item => item.category === filters.category)
    .filter(item => item.inStock === filters.inStock)
    .filter(item => item.price >= filters.minPrice);
  
  return result.sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}
console.log(filterAndSort(products, filters, sortBy));


/*Задача 1.5: Нормализация вложенных данных 🟡
Контекст: API вернул вложенную структуру постов с комментариями, нужно нормализовать для state management.

Задача:*/

const posts = [
  {
    id: 1,
    title: 'Post 1',
    author: { id: 101, name: 'John' },
    comments: [
      { id: 201, text: 'Great!', author: { id: 102, name: 'Jane' } },
      { id: 202, text: 'Nice', author: { id: 103, name: 'Bob' } },
    ]
  },
  {
    id: 2,
    title: 'Post 2',
    author: { id: 102, name: 'Jane' },
    comments: [
      { id: 203, text: 'Cool', author: { id: 101, name: 'John' } },
    ]
  }
];

// Нужно получить:
// {
//   posts: { 1: { id: 1, title: 'Post 1', authorId: 101, commentIds: [201, 202] }, ... },
//   comments: { 201: { id: 201, text: 'Great!', authorId: 102 }, ... },
//   users: { 101: { id: 101, name: 'John' }, ... }
// }

//Решение:

function normalizePosts(posts) {
  const result = {
    posts: {},
    comments: {},
    users: {}
  };

for (let post of posts) {
 result.users[post.author.id]={    // заполняем строку users
  id:post.author.id,
  name:post.author.name
 };  
 let comm=[];
   for (const comment of post.comments) {
    comm.push(comment.id);
    result.comments[comment.id]={
    id:comment.id,
    text:comment.text,
    authorId:comment.author.id, 
    
        }
    
   }
  result.posts[post.id]={
    id:post.id,
    title:post.title,
    authorId:post.author.id,
    commentIds:comm,
  }
}
  return result;
}

/*Задача 1.6: Поиск по массиву объектов 🟢
Контекст: Реализовать поиск по имени и email в списке пользователей (как в поисковой строке).

Задача:*/

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@company.com' },
];

// Функция: searchUsers(users, query)
// query = 'john' должен найти John Doe и Bob Johnson
function searchUsers(users,query) {

query=query.toLowerCase();
const result = users.filter(user=>user.name.toLowerCase().includes(query)||
                            user.email.toLowerCase().includes(query));
if (result.length > 0) return result;
else return [];

}


console.log(searchUsers(users,'John'));
