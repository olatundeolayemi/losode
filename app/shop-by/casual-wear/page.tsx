import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts, kidsClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Casual Wear | LOSODE",
  description: "Effortless everyday African fashion for any occasion",
};

export default function CasualWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "casual"),
    ...menClothingProducts.filter((p) => p.occasion === "casual"),
    ...kidsClothingProducts.filter((p) => p.occasion === "casual"),
  ];
  
  return (
    <ShopByPage
      title="Casual Wear"
      description="Effortless style for everyday moments. Our casual collection blends comfort with African elegance."
      heroImage="/images/category-women-hero.jpg"
      products={products}
      subcategories={[
        { name: "T-Shirts", href: "/shop-by/casual-wear" },
        { name: "Jeans", href: "/shop-by/casual-wear" },
        { name: "Casual Dresses", href: "/shop-by/casual-wear" },
        { name: "Boubous", href: "/shop-by/casual-wear" },
      ]}
    />
  );
}
