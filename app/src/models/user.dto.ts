// users dto
export type CreateUserDto = {
    email: string;
    password: string;
  }

export type UpdateUserDto  =  CreateUserDto &{
    isAvailable: boolean;
  }
  
