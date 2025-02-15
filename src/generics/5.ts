// зіставити: роль - опис (ключ K - значення T(тип))
// Record<K, T>
//enum - перелік;

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserDescription = Record<UserRole, string>;

const RoleDescription: UserDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log(RoleDescription);
