import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Work Wear | LOSODE",
  description: "Professional African fashion for the workplace",
};

export default function WorkWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "work"),
    ...menClothingProducts.filter((p) => p.occasion === "work"),
  ];
  
  return (
    <ShopByPage
      title="Work Wear"
      description="Professional pieces with African flair. Look polished and confident at work with our curated work wear collection."
      heroImage="/images/product-work-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Blazers", href: "/shop-by/work-wear" },
        { name: "Office Dresses", href: "/shop-by/work-wear" },
        { name: "Trousers", href: "/shop-by/work-wear" },
        { name: "Work Tops", href: "/shop-by/work-wear" },
      ]}
    />
  );
}
