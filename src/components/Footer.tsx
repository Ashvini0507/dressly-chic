const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-4">MAISON ÉLISE</h3>
            <p className="font-elegant text-primary-foreground/70 text-lg leading-relaxed">
              Timeless elegance, modern sensibility. Crafted for women who dare to be extraordinary.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4 text-primary-foreground/50">Shop</h4>
            <ul className="space-y-3">
              {["New Arrivals", "Dresses", "Evening Wear", "Bridal", "Sale"].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4 text-primary-foreground/50">About</h4>
            <ul className="space-y-3">
              {["Our Story", "Atelier", "Sustainability", "Careers"].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-4 text-primary-foreground/50">Contact</h4>
            <ul className="space-y-3">
              {["Customer Care", "Size Guide", "Shipping & Returns", "FAQ"].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Maison Élise. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "TikTok"].map(social => (
              <a key={social} href="#" className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
