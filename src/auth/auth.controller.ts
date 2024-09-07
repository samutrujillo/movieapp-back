import { Controller, Post, Body, Req, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('lastname') lastname: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(name, lastname, email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(email, password);
    if (user) {
      return this.authService.login(user);
    }
    throw new NotFoundException('User not found or invalid credentials');
  }
}
