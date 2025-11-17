import { User } from "./user.ts";

const adminUser = new User("admin", "123456", 27, "andrea@test.cz");
adminUser.logUser();
adminUser.setAge(35);
console.log("Username admina: " + adminUser.getUsername());

console.log("Email: " + adminUser.getEmail());
