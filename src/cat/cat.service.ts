import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto } from './dto/create.dto';
import { Cat, CatDocument } from './schemata/cat.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}
  // private readonly cats: Cat[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async create(createDto: CreateDto): Promise<Cat> {
    const newCat = await this.catModel.create(createDto);
    return newCat;
  }
}
