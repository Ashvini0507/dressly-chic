import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";

const products = [
  { image: dress1, name: "Emerald Silk Wrap Dress", price: "$890", category: "Evening Wear" },
  { image: dress2, name: "Noir Velvet Sheath", price: "$720", category: "Cocktail" },
  { image: dress3, name: "Blush Chiffon Gown", price: "$1,150", category: "Bridal" },
  { image: dress4, name: "Ivory Satin Slip", price: "$540", category: "Essentials" },
  { image: dress5, name: "Scarlet Sculpted Dress", price: "$680", category: "Statement" },
  { image: dress6, name: "Midnight Lace Gown", price: "$1,280", category: "Black Tie" },
];

const ProductGrid = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            New Arrivals
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Just Landed
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
