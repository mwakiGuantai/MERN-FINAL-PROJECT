import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  imageUrl: string;
  ticketsLeft: number;
}

interface EventCardProps {
  event: Event;
  onViewDetails: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  return (
    <Card className="glass-card event-card overflow-hidden border-0 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge 
          className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground border-0"
        >
          {event.category}
        </Badge>
        {event.ticketsLeft <= 10 && (
          <Badge 
            variant="destructive" 
            className="absolute top-3 right-3 animate-pulse"
          >
            Only {event.ticketsLeft} left!
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {event.description}
          </p>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-accent" />
            <span>{event.ticketsLeft} tickets available</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="space-y-1">
            <p className="text-2xl font-bold gradient-text">
              ${event.price}
            </p>
            <p className="text-xs text-muted-foreground">per ticket</p>
          </div>
          
          <Button 
            variant="gradient" 
            onClick={() => onViewDetails(event.id)}
            className="px-6"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;