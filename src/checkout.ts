import { Product, SKU, products } from './models';
import { PricingRule } from './pricingRules';

export class Checkout {
  private items: Product[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  // Scan the item
  scan(itemSku: SKU): void {
    const product = products.find(p => p.sku === itemSku);
    if (product) {
      this.items.push(product);
    } else {
      console.error(`Product with SKU ${itemSku} not found.`);
    }
  }

  // Calculate total price of scanned items an return the total price.
  total(): number {
    let total = 0;
    let itemsToProcess = [...this.items];

    // Apply each pricing rule
    for (const rule of this.pricingRules) {
      const result = rule.apply(itemsToProcess);
      total += result.total;
      itemsToProcess = result.remainingItems;
    }

    // Calculate price for remaining items not affected by any pricing rule
    total += itemsToProcess.reduce((sum, item) => sum + item.price, 0);

    // setting items to empty array as we have calculated the total price.
    this.items = [];
    return total;
  }
}
