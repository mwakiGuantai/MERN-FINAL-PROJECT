import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">Showtime Central</span>
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search events, venues, artists..."
                className="pl-10 glass-card border-border/50 focus:border-primary"
              />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Events</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Create Event</a>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Mobile search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-4 h-4" />
            </Button>
            
            {/* User actions */}
            <Button variant="glass" size="sm">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Sign Up
            </Button>
            
            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search - Hidden by default */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search events..."
              className="pl-10 glass-card border-border/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;