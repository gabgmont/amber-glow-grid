import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative h-64 mb-8 rounded-2xl overflow-hidden shadow-card"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-primary opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to Energy Web X
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Let's talk about Energy Web's technology, ecosystem solutions
        </p>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-8 opacity-30">
          <div className="w-24 h-24 border-2 border-primary transform rotate-45" />
        </div>
        <div className="absolute bottom-8 right-16 opacity-20">
          <div className="w-16 h-16 bg-gradient-primary transform rotate-12 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;