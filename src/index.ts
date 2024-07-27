import { Checkout } from './checkout';
import { pricingRules } from './pricingRules';

const co = new Checkout(pricingRules);

co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');
console.log(`Total expected: $249.00, Total calculated: $${co.total()}`);

co.scan('atv');
co.scan('ipd');
co.scan('ipd');
co.scan('atv');
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
console.log(`Total expected: $2718.95, Total calculated: $${co.total()}`);
