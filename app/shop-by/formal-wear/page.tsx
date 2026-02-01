import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts } from "@/lib/products";

export const metadata = {
  title: "Formal Wear | LOSODE",
  description: "Elegant African formal attire for special occasions",
};

export default function FormalWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "formal"),
    ...menClothingProducts.filter((p) => p.occasion === "formal"),
  ];
  
  return (
    <ShopByPage
      title="Formal Wear"
      description="Make a statement at every formal occasion with our sophisticated African designs."
      heroImage="/images/category-men-hero.jpg"
      products={products}
      subcategories={[
        { name: "Evening Gowns", href: "/shop-by/formal-wear" },
        { name: "Suits", href: "/shop-by/formal-wear" },
        { name: "Agbada", href: "/shop-by/formal-wear" },
        { name: "Cocktail Dresses", href: "/shop-by/formal-wear" },
      ]}
    />
  );
}
