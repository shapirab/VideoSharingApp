import { UserRole } from "src/models/entities/user";

export interface UserToRegisterDto{
   firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    username: string,
    password: string,
    userRole: UserRole
}
