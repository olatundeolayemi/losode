import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Tall Fit Clothing | LOSODE",
  description: "African fashion designed for taller frames",
};

export default function TallPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.isNew).slice(0, 8),
    ...menClothingProducts.slice(0, 4),
  ];
  
  return (
    <ShopByPage
      title="Tall"
      description="Specially designed pieces with extended lengths to perfectly complement taller frames. Style that fits."
      heroImage="/images/women-boubou-1.jpg"
      products={products}
      subcategories={[
        { name: "Maxi Dresses", href: "/shop-by/tall" },
        { name: "Long Tops", href: "/shop-by/tall" },
        { name: "Extended Length Trousers", href: "/shop-by/tall" },
        { name: "Maxi Skirts", href: "/shop-by/tall" },
      ]}
    />
  );
}
