import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcryptjs';
import { Model } from 'mongoose';
import { User, type UserDocument } from '../../schemas/user.schema.js';

@Injectable()
export class AdminAuthService {
  constructor(
    @InjectModel(User.name) private readonly users: Model<UserDocument>,
  ) { }

  async assertCredentials(email: string, password: string) {
    const user = await this.users
      .findOne({ email, role: 'admin' })
      .select('+password');
    if (!user) {
      throw new UnauthorizedException('Invalid Email or Password');
    }
    const isMatch = await compare(password, user.password || '');
    if (!isMatch) {
      throw new UnauthorizedException('Invalid Email or Password');
    }
    return user;
  }
}
