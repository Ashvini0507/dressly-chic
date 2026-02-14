import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-secondary mb-4 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart
            size={16}
            className={liked ? "fill-accent text-accent" : "text-foreground"}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-background text-foreground font-body text-xs uppercase tracking-[0.15em] py-3 hover:bg-accent hover:text-accent-foreground transition-colors">
            Quick View
          </button>
        </div>
      </div>
      <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
        {category}
      </p>
      <h3 className="font-display text-lg text-foreground mb-1">{name}</h3>
      <p className="font-body text-sm text-muted-foreground">{price}</p>
    </motion.div>
  );
};

export default ProductCard;
