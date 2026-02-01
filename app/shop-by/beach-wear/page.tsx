import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Beach Wear | LOSODE",
  description: "Discover stunning African-inspired beach wear and resort fashion",
};

export default function BeachWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "beach"),
    ...menClothingProducts.filter((p) => p.occasion === "beach"),
  ];
  
  return (
    <ShopByPage
      title="Beach Wear"
      description="Sun-kissed style with African flair. Discover our curated collection of beach and resort wear perfect for your next getaway."
      heroImage="/images/product-beach-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Cover Ups", href: "/shop-by/beach-wear" },
        { name: "Swimwear", href: "/shop-by/beach-wear" },
        { name: "Kaftans", href: "/shop-by/beach-wear" },
        { name: "Beach Dresses", href: "/shop-by/beach-wear" },
      ]}
    />
  );
}
