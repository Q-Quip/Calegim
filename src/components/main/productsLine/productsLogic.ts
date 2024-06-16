type Product = {
    src: string;
    alt: string;
    ImgTitle: string;
  };
  
  type ProductInfo = {
    title: string;
    price: number;
    text: string;
  };

  type Bestseller = Array<[Product, ProductInfo, HoveredInfo]>;

  type ProductCardProps = {
    src: string;
    alt: string;
    ImgTitle: string;

    title: string;
    price:number;
    text: string;

    hoveredTitle: string;
    hoveredApplication: string;
    hoveredTargets: string;

    activeCard: number;
  };
  
interface HoveredProps  {
  title: string;
  targets: string;
  application: string;
  price: number
  
  src: string;
  alt: string;
  ImgTitle: string;
};

type HoveredInfo = {
  title: string;
  targets: string;
  application: string;
};

interface HandleProps {
  title: string;
  price: number;
}