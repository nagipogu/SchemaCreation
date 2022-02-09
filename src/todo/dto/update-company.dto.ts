import { BaseCompanyDto } from './base-company.dto';

export class UpdateCompanyDto extends BaseCompanyDto {
  completedAt: Date;
}