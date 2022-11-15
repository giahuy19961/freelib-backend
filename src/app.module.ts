import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { UserEntity } from "./users/entities/user.entity";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      database: "freelib",
      password: "1207",
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
