import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./entities/user.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return plainToInstance(UserDto, users, { excludeExtraneousValues: true });
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ id });
    return plainToInstance(UserDto, user, { excludeExtraneousValues: true });
  }

  async create(createdUser: UserDto): Promise<UserDto> {
    const user = { ...createdUser, createdAt: new Date().toUTCString() };
    const savedUser = await this.userRepository.save(user);
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, user: UserDto): Promise<boolean> {
    const result = await this.userRepository.update(id, user);
    console.log(result);
    return result.affected === 1;
  }
}
