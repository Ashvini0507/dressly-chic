import { motion } from "framer-motion";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

const collections = [
  {
    image: collection1,
    title: "Evening Glamour",
    subtitle: "Gowns & cocktail dresses",
  },
  {
    image: collection2,
    title: "Summer Soirée",
    subtitle: "Flowing silhouettes & bold prints",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Curated for You
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Collections
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group cursor-pointer relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/35 transition-colors duration-300" />
              <div className="absolute bottom-8 left-8">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-2">
                  {col.subtitle}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-primary-foreground">
                  {col.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
