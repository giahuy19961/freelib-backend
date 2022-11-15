import { Column, Entity } from "typeorm";

@Entity()
export class BaseEntity {
  @Column({
    default: null,
  })
  deletedAt: string;

  @Column()
  createdAt: string;

  @Column({
    default: null,
  })
  updatedAt: string;
}
