export interface User{
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  username: string,
  password: string,
  userRole: UserRole
}

export enum UserRole{
  CLIENT,
  ADMIN
}
