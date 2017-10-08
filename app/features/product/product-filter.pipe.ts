import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from 'app/features/product/product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], args: string[]): IProduct[] {
        console.log('The filter is ' + args);
        let filter: string = args[0] ? args.toString().toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}