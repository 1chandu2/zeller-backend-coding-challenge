import { Product, products } from './models';

export interface PricingRule {
  apply: (items: Product[]) => { total: number; remainingItems: Product[] };
}

export const pricingRules: PricingRule[] = [
  {
    apply: (items: Product[]) => {
      // 3 for 2 deal on Apple TVs
      const atvs = items.filter(item => item.sku === 'atv');
      const nonAtvs = items.filter(item => item.sku !== 'atv');
      const freeAtvs = Math.floor(atvs.length / 3);
      const total = (atvs.length - freeAtvs) * products.find(p => p.sku === 'atv')!.price;
      return { total, remainingItems: nonAtvs };
    },
  },
  {
    apply: (items: Product[]) => {
      // Bulk discount on Super iPad
      const ipads = items.filter(item => item.sku === 'ipd');
      const nonIpads = items.filter(item => item.sku !== 'ipd');
      let total = 0;
      if (ipads.length > 4) {
        total = ipads.length * 499.99;
      } else {
        total = ipads.length * products.find(p => p.sku === 'ipd')!.price;
      }
      return { total, remainingItems: nonIpads };
    },
  },
];
