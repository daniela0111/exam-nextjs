import { Body, Controller, Get, Headers, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() signUpDto:SignUpDto):Promise<{token: string}>{
        return this.authService.signUp(signUpDto);
    }

    @Get('login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }>{
        return this.authService.login(loginDto)
    }

    @Post('logout')
    @UseGuards(AuthGuard())
    logout(@Headers('authorization') authorization: string, @Res() response: Response){
        return this.authService.logOut(authorization,response)
    }
}
