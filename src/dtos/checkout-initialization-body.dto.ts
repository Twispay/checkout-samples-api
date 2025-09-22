import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CheckoutInitializationBodyDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsString()
  publicKey: string;

  @IsOptional()
  @IsString()
  customData?: string;

  @IsOptional()
  @IsNumber()
  cardId?: number;

  @IsOptional()
  @IsBoolean()
  saveCard?: boolean;

  @IsOptional()
  @IsNumber()
  xMoneyCustomerId?: number;
}
