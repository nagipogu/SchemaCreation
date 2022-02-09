import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company, CompanyDocument } from '../schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private readonly model: Model<CompanyDocument>,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    return await this.model.findById(id).exec();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return await new this.model({
      ...createCompanyDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return await this.model.findByIdAndUpdate(id, updateCompanyDto).exec();
  }

  async delete(id: string): Promise<Company> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
