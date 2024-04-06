import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt}
      height={0}
      width={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      {...props}
    />
  );
};

export default PromoBanner;
