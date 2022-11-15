import { BaseEntity } from "src/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum USER_ROLES {
  "ADMIN" = "admin",
  "USER" = "user",
}

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: USER_ROLES,
    default: "user",
  })
  role: `${USER_ROLES}`;

  @Column({
    type: "boolean",
    default: false,
  })
  deleted: boolean;
}
