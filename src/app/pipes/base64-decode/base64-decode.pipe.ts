import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'base64Decode'
})

export class Base64DecodePipe implements PipeTransform {
    transform(value: string): string {
        return decodeURIComponent(atob( value ))
    }
}