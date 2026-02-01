import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Regular Fit Clothing | LOSODE",
  description: "Classic regular fit African fashion pieces",
};

export default function RegularFitPage() {
  const products = [
    ...womenClothingProducts.slice(2, 8),
    ...menClothingProducts.slice(2, 6),
  ];
  
  return (
    <ShopByPage
      title="Regular Fit"
      description="Timeless pieces that fit just right. Our regular fit collection offers the perfect balance of comfort and style."
      heroImage="/images/women-dress-formal-1.jpg"
      products={products}
      subcategories={[
        { name: "Dresses", href: "/shop-by/regular-fit" },
        { name: "Shirts", href: "/shop-by/regular-fit" },
        { name: "Trousers", href: "/shop-by/regular-fit" },
        { name: "Jumpsuits", href: "/shop-by/regular-fit" },
      ]}
    />
  );
}
