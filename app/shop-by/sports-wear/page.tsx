import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Sports Wear | LOSODE",
  description: "Active African fashion - stylish and functional activewear",
};

export default function SportsWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "sports"),
    ...menClothingProducts.filter((p) => p.occasion === "sports"),
  ].length > 0 ? [
    ...womenClothingProducts.filter((p) => p.occasion === "sports"),
    ...menClothingProducts.filter((p) => p.occasion === "sports"),
  ] : womenClothingProducts.slice(0, 8);
  
  return (
    <ShopByPage
      title="Sports Wear"
      description="Stay active in style. Our sports wear collection combines functionality with African-inspired design for the modern athlete."
      heroImage="/images/product-sports-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Leggings", href: "/shop-by/sports-wear" },
        { name: "Sports Bras", href: "/shop-by/sports-wear" },
        { name: "Athletic Tops", href: "/shop-by/sports-wear" },
        { name: "Workout Sets", href: "/shop-by/sports-wear" },
      ]}
    />
  );
}
