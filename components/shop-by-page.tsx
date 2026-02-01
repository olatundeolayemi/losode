"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Grid3X3, LayoutGrid, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  designer: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ShopByPageProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
  subcategories?: { name: string; href: string }[];
}

export function ShopByPage({
  title,
  description,
  heroImage,
  products,
  subcategories,
}: ShopByPageProps) {
  const [gridSize, setGridSize] = useState<"small" | "large">("large");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = {
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["Black", "White", "Red", "Blue", "Green", "Gold", "Multi"],
    price: ["Under £50", "£50-£100", "£100-£200", "£200-£500", "Over £500"],
    designer: ["Amaka Osakwe", "Lisa Folawiyo", "Deola Sagoe", "Lanre Da Silva"],
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1A1A1A' }}>{title}</h1>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg">{description}</p>
        </div>
      </section>

      {/* Subcategories */}
      {subcategories && subcategories.length > 0 && (
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {subcategories.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Toolbar */}
      <section className="border-b border-border sticky top-0 bg-background z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                Filters
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showFilters && "rotate-180"
                  )}
                />
              </Button>
              <span className="text-sm text-muted-foreground">
                {products.length} Items
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setGridSize("small")}
                  className={cn(gridSize === "small" && "bg-muted")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setGridSize("large")}
                  className={cn(gridSize === "large" && "bg-muted")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(filters).map(([category, options]) => (
                <div key={category}>
                  <h3 className="font-medium mb-3 capitalize">{category}</h3>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedFilters.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFilters([...selectedFilters, option]);
                            } else {
                              setSelectedFilters(
                                selectedFilters.filter((f) => f !== option)
                              );
                            }
                          }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {selectedFilters.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="secondary"
                    size="sm"
                    className="gap-1 h-7"
                    onClick={() =>
                      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
                    }
                  >
                    {filter}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7"
                  onClick={() => setSelectedFilters([])}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "grid gap-4 md:gap-6",
              gridSize === "small"
                ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            )}
          >
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-3">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-foreground text-background text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                  <button
                    className="absolute top-2 right-2 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to wishlist logic
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {product.designer}
                  </p>
                  <h3 className="font-medium text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      £{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        £{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
