import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner-home(1).png"
        alt="até 55% de desconto esse mês!"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-Mouses-(02).png"
        alt="até 55% de desconto em mouses!"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
    </div>
  );
}
