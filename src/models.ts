export type SKU = 'ipd' | 'mbp' | 'atv' | 'vga';

export interface Product {
  sku: SKU;
  name: string;
  price: number;
}

export const products: Product[] = [
  { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
  { sku: 'atv', name: 'Apple TV', price: 109.50 },
  { sku: 'vga', name: 'VGA adapter', price: 30.00 },
];