import { IsNotEmpty, IsString } from "class-validator";
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export class CreatePublicationDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsStringInAmericanDate()
  dateToPublish: string;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}



function IsStringInAmericanDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsStringInAmericanDate',
      target: object.constructor,
      propertyName: propertyName,
      /*       constraints: [property], */
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const date = new Date(value);
          return typeof value === 'string'
            && date instanceof Date && !isNaN(date.valueOf())
        },
      },
    });
  };
}