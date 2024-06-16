interface ImgOfProduct {
    src: string;
    alt: string;
    title: string;
};
interface ProductInfo {
    productTitle: string;
    price: number;
    count: number;
};

interface ManageProduct {
    cardImg:ImgOfProduct[];
    cardInfo:ProductInfo[];
}

export {ImgOfProduct,ProductInfo,ManageProduct};