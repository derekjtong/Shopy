import Image from "next/image";
import { Product } from "@/types/Product";
import Link from "next/link";
import { useContext } from "react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/components/providers/cart-provider";

interface ProductItemV2Props {
  product: Product;
}

const ProductItem: React.FC<ProductItemV2Props> = ({ product }) => {
  const { incrementCart } = useContext(CartContext);

  return (
    <div className="rounded-lg bg-white px-10 py-10 shadow-md dark:bg-gray-800 dark:shadow-lg">
      <Link href={`/${product._id}`} passHref>
        <div className="relative flex h-48 w-96 justify-center">
          <Image
            src={product.imgUrl}
            alt={product.name}
            className="h-48 rounded-md"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Link>
      <div className="mt-4">
        <Link href={`/${product._id}`} passHref>
          <h1 className="truncate text-lg font-bold uppercase text-gray-900 dark:text-white">{product.name}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.category}</p>
        </Link>
        <p className="mt-2 text-gray-900 dark:text-gray-100">{formatPrice(product.price)}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Button className="rounded text-xs font-bold uppercase" onClick={() => incrementCart(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
