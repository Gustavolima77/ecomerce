import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home(1).png"
        alt="até 55% de desconto esse mês!"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-Mouses-(02).png"
        alt="até 55% de desconto em mouses!"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/Banner-Fones-(3).png"
          alt="até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
