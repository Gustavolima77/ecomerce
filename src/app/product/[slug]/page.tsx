import { prismaClient } from "@/lib/prisma";
import Productimages from "./components/product-images";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <h1 className="p-5">
      <Productimages imageUrls={product.imageUrls} name={product.name} />
    </h1>
  );
};

export default ProductDetailsPage;
