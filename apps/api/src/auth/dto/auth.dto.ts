import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(1)
    password!: string;

    @IsOptional()
    @IsString()
    slug?: string;
}

export class RegisterDto {
    @IsString()
    @MinLength(1)
    name!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(1)
    password!: string;

    @IsString()
    @MinLength(1)
    bio!: string;

    @IsOptional()
    @IsString()
    slug?: string;
}

export class SetPasswordDto {
    @IsEmail()
    email!: string;

    @IsString()
    token!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsOptional()
    @IsString()
    slug?: string;
}

export class CustomerLoginDto {
    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    login?: string;

    @IsString()
    @MinLength(1)
    password!: string;

    @IsOptional()
    @IsString()
    slug?: string;
}

export class ResetPasswordDto {
    @IsString()
    @MinLength(1)
    email!: string;

    @IsString()
    @MinLength(1)
    password!: string;

    @IsString()
    @MinLength(6)
    newPassword!: string;
}

export class ForgotPasswordDto {
    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    login?: string;

    @IsOptional()
    @IsString()
    slug?: string;
}

export class ConfirmForgotPasswordDto extends ForgotPasswordDto {
    @IsString()
    @MinLength(1)
    otp!: string;

    @IsString()
    @MinLength(6)
    newPassword!: string;
}

export class FcmTokenDto {
    @IsString()
    @MinLength(1)
    token!: string;

    @IsOptional()
    @IsString()
    portal?: string;
}

export class RemoveFcmTokenDto {
    @IsOptional()
    @IsString()
    token?: string;
}
