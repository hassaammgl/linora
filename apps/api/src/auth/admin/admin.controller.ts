import { Controller, Post, Body, Res } from '@nestjs/common';
import { AdminAuthService } from './admin.service.js';
import { LoginDto } from "../dto/auth.dto.js"

@Controller('admin')
export class AdminAuthController {
  constructor(private readonly auth: AdminAuthService) { }

  @Post('login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = this.auth.assertCredentials(body.email, body.password)
  }


}
