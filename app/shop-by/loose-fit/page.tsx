import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Loose Fit Clothing | LOSODE",
  description: "Comfortable loose fit African fashion for all body types",
};

export default function LooseFitPage() {
  const products = [
    ...womenClothingProducts.slice(0, 8),
    ...menClothingProducts.slice(0, 4),
  ];
  
  return (
    <ShopByPage
      title="Loose Fit"
      description="Embrace comfort and style with our collection of beautifully loose-fitting pieces designed for ease and elegance."
      heroImage="/images/women-casual-top-1.jpg"
      products={products}
      subcategories={[
        { name: "Dresses", href: "/shop-by/loose-fit" },
        { name: "Tops", href: "/shop-by/loose-fit" },
        { name: "Jumpsuits", href: "/shop-by/loose-fit" },
        { name: "Wide Leg Pants", href: "/shop-by/loose-fit" },
      ]}
    />
  );
}
