import { User } from "../interfaces/UserInterface";
import { http } from "../utils/http-common";

export function getUsers() {
  return http.get("/users").then((res) => {
    return res.data;
  });
}
export function getUserById(id: string) {
  return http.get(`/users/${id}`);
}
export function getUserByUUID(uuid: string) {
  return http.get(`/users/uuid/${uuid}`).then((res) => res.data.data);
}
export function createNewUser(user: User) {
  return http.post("/users", user).then((res) => {
    return res.data;
  });
}

export function updateUser(userId: number, user: User) {
  return http.put(`/users/${userId}`, user).then((res) => res.data.data);
}

export function deleteUser(userId: number) {
  return http.delete(`/users/${userId}`).then((res) => res.data.data);
}
