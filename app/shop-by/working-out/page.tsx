import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Working Out Fashion | LOSODE",
  description: "Stylish fitness and workout apparel with African inspiration",
};

export default function WorkingOutPage() {
  const products = [
    ...womenClothingProducts.slice(0, 8),
    ...menClothingProducts.slice(0, 4),
  ];
  
  return (
    <ShopByPage
      title="Working Out"
      description="Get fit in style. Our working out collection features performance fabrics with contemporary African design."
      heroImage="/images/product-sports-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Running Gear", href: "/shop-by/working-out" },
        { name: "Gym Wear", href: "/shop-by/working-out" },
        { name: "Yoga Wear", href: "/shop-by/working-out" },
        { name: "Recovery Wear", href: "/shop-by/working-out" },
      ]}
    />
  );
}
