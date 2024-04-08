"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, totalPrice, description, discountPercentage },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecraseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityclick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5  ">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R${totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecraseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityclick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between bg-accent  px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />

          <div className="flex flex-col ">
            <p className="text-xs">
              Entrega via <span className="font-bold">GPPacket®</span>
            </p>
            <p className="bg-category-item-gradient text-xs">
              Envio para <span className="font-bold"> todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
