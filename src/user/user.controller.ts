import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (!/^[a-zA-Z0-9-_]+$/.test(username.trim())) {
            throw new Error("Le nom d'utilisateur ne doit pas contenir de caracteres speciaux");
        }
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (isNaN(id) || !Number.isInteger(id) || id < 0) {
            throw new Error("L'id doit etre unnombre entier positif");
        }
        return this.userService.getById(id);
    }
}