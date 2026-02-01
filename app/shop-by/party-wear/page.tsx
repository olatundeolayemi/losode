import { ShopByPage } from "@/components/shop-by-page";
import { womenClothingProducts, menClothingProducts, jewelryProducts } from "@/lib/products";

export const metadata = {
  title: "Party Wear | LOSODE",
  description: "Stand out at every celebration with African party fashion",
};

export default function PartyWearPage() {
  const products = [
    ...womenClothingProducts.filter((p) => p.occasion === "party"),
    ...menClothingProducts.filter((p) => p.occasion === "party"),
    ...jewelryProducts.filter((p) => p.occasion === "party"),
  ];
  
  return (
    <ShopByPage
      title="Party Wear"
      description="Turn heads at every celebration. Our party collection features bold, glamorous African designs."
      heroImage="/images/product-party-wear-1.jpg"
      products={products}
      subcategories={[
        { name: "Sequin Dresses", href: "/shop-by/party-wear" },
        { name: "Mini Dresses", href: "/shop-by/party-wear" },
        { name: "Jumpsuits", href: "/shop-by/party-wear" },
        { name: "Statement Pieces", href: "/shop-by/party-wear" },
      ]}
    />
  );
}
