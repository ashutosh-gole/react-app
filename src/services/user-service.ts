import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

class UserService {

    getAllUsers() {
        const controller = new AbortController();

        const request = apiClient.get<User[]>("/users", {
            signal: controller.signal,
        });

        return { request, cancel: () => controller.abort() };
    }

    deleteUser(userId: number) {
        return apiClient.delete(`/users/${userId}`);
    }

    addUser(newUser: User) {
        return apiClient.post(`/users`, newUser);
    }

    updateUser(updatedUser: User) {
        return apiClient.patch(`/users/${updatedUser.id}`, updatedUser);
    }

}

export default new UserService();