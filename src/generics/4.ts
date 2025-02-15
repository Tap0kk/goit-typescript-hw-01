// Partial - створює новий тип на основі типу T
//приймає старий профіль і {нові зміни}
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  // З'єднуємо значення за замовчуванням і дані користувача
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// //?
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };
// function createOrUpdateUser(initialValues: Partial<User>) {
//   // Оновлення користувача
//  console.log(initialValues)
// }
// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });
