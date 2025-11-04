export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  qr: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "手工香薰蜡烛",
    description: "米白色轻奢香薰蜡烛，天然大豆蜡，手工制作。",
    image: "/products/candle1.jpg",
    qr: "/qr-placeholder.png"
  },
  {
    id: "2",
    name: "手工陶瓷杯",
    description: "简约米白陶瓷杯，温润手感，适合日常使用。",
    image: "/products/mug1.jpg",
    qr: "/qr-placeholder.png"
  }
];
