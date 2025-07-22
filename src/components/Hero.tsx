import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Sparkles } from 'lucide-react';
import heroConcert from '@/assets/hero-concert.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroConcert} 
          alt="Concert" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-3 h-3 bg-accent rounded-full" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-500">
        <div className="w-4 h-4 bg-accent/50 rounded-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <Badge className="bg-gradient-accent text-accent-foreground border-0 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover Amazing Events
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Find Your Next
            <br />
            <span className="gradient-text">Epic Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From electrifying concerts to intimate comedy shows, discover and book 
            the hottest entertainment events in your city.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="gradient" 
            className="px-8 py-6 text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Explore Events
          </Button>
          
          <Button 
            size="lg" 
            variant="glass" 
            className="px-8 py-6 text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold gradient-text">1,500+</p>
            <p className="text-muted-foreground">Events This Month</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold gradient-text">50K+</p>
            <p className="text-muted-foreground">Happy Attendees</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold gradient-text">200+</p>
            <p className="text-muted-foreground">Amazing Venues</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;