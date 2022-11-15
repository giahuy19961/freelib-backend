import { Expose, Transform } from "class-transformer";
import { UserEntity, USER_ROLES } from "../entities/user.entity";

export class UserDto {
  @Expose()
  id: string;

  firstName: string;

  lastName: string;

  @Expose()
  age: string;

  @Expose()
  username: string;

  password: string;

  @Expose()
  role: `${USER_ROLES}`;

  @Expose()
  deleted: boolean;

  @Expose()
  @Transform(({ obj }) => obj.firstName + " " + obj.lastName)
  fullName: string;
}
