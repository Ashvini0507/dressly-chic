import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">New In</a>
          <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">Collections</a>
          <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">Dresses</a>
        </div>

        <a href="/" className="font-display text-2xl tracking-wide text-foreground">
          MAISON ÉLISE
        </a>

        <div className="flex items-center gap-5">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search size={18} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            <Heart size={18} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">New In</a>
              <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Collections</a>
              <a href="#" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Dresses</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
