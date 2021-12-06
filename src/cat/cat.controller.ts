import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateDto } from './dto/create.dto';
import { CatService } from './cat.service';
// import { Cat } from './schemata/cat.schema';

@Controller()
export class CatController {
  constructor(private readonly appService: CatService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('list')
  async findAll(
    @Req() request: Request,
    @Res() res: Response,
  ): Promise<Response> {
    console.log('req : ', request.params);
    return res.status(200).json({
      result: 'ok',
      message: 'success',
      data: await this.appService.findAll(),
    });
  }

  @Get('one/:id')
  findOne(@Param() params): string {
    console.log(params);
    return `This action returns a #${params.id} cat`;
  }

  @Post('new')
  @HttpCode(200)
  async create(@Body() createDto: CreateDto) {
    console.log('body : ', createDto);
    await this.appService.create(createDto);
  }
}
