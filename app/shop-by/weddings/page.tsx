import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts, jewelryProducts, bagsProducts } from "@/lib/products";

export const metadata = {
  title: "Wedding Wear | LOSODE",
  description: "Beautiful African wedding attire for brides, grooms and guests",
};

export default function WeddingsPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "wedding"),
    ...menClothingProducts.filter((p) => p.occasion === "wedding"),
    ...jewelryProducts.filter((p) => p.occasion === "wedding"),
    ...bagsProducts.filter((p) => p.occasion === "wedding"),
  ];
  
  return (
    <ShopByPage
      title="Weddings"
      description="Celebrate love in style. Discover our stunning collection of traditional and contemporary African wedding attire."
      heroImage="/images/product-wedding-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Bridal", href: "/shop-by/weddings" },
        { name: "Aso-Ebi", href: "/shop-by/weddings" },
        { name: "Guest Outfits", href: "/shop-by/weddings" },
        { name: "Groom Attire", href: "/shop-by/weddings" },
      ]}
    />
  );
}
