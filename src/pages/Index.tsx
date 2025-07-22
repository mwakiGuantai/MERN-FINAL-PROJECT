import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Mic, Palette, Users } from 'lucide-react';
import comedyShow from '@/assets/comedy-show.jpg';
import artShow from '@/assets/art-show.jpg';
import liveMusic from '@/assets/live-music.jpg';
import heroConcert from '@/assets/hero-concert.jpg';

const Index = () => {
  // Sample event data
  const sampleEvents = [
    {
      id: '1',
      title: 'Electric Nights DJ Festival',
      description: 'Experience the hottest DJs spinning the latest electronic beats in an unforgettable night of music and energy.',
      date: 'December 15, 2024',
      time: '9:00 PM',
      location: 'Metro Convention Center',
      category: 'Music',
      price: 75,
      imageUrl: heroConcert,
      ticketsLeft: 45
    },
    {
      id: '2',
      title: 'Comedy Central Live',
      description: 'Laugh until your sides hurt with the best stand-up comedians performing their latest material.',
      date: 'December 20, 2024', 
      time: '8:00 PM',
      location: 'Downtown Comedy Club',
      category: 'Comedy',
      price: 35,
      imageUrl: comedyShow,
      ticketsLeft: 8
    },
    {
      id: '3',
      title: 'Modern Art Showcase',
      description: 'Discover emerging artists and their stunning contemporary works in this curated exhibition.',
      date: 'December 22, 2024',
      time: '6:00 PM', 
      location: 'City Art Gallery',
      category: 'Art',
      price: 25,
      imageUrl: artShow,
      ticketsLeft: 120
    },
    {
      id: '4',
      title: 'Indie Rock Revolution',
      description: 'Three amazing indie bands taking the stage for a night of alternative rock and raw energy.',
      date: 'December 28, 2024',
      time: '7:30 PM',
      location: 'Underground Venue',
      category: 'Music', 
      price: 50,
      imageUrl: liveMusic,
      ticketsLeft: 25
    }
  ];

  const handleViewDetails = (eventId: string) => {
    console.log('View details for event:', eventId);
    // Navigate to event details page
  };

  const categories = [
    { name: 'All Events', icon: Users, count: sampleEvents.length },
    { name: 'Music', icon: Music, count: sampleEvents.filter(e => e.category === 'Music').length },
    { name: 'Comedy', icon: Mic, count: sampleEvents.filter(e => e.category === 'Comedy').length },
    { name: 'Art', icon: Palette, count: sampleEvents.filter(e => e.category === 'Art').length }
  ];

  const Index = () => {
    return (
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        {/* Featured Events Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-secondary text-secondary-foreground border-0 mb-4">
                Featured Events
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover <span className="gradient-text">Amazing Events</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From music festivals to art exhibitions, find the perfect event for your next adventure.
              </p>
            </div>
            
            {/* Category Tabs */}
            <Tabs defaultValue="All Events" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 glass-card border-border/50">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.name}
                    value={category.name}
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="All Events" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sampleEvents.map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Music" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sampleEvents.filter(e => e.category === 'Music').map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Comedy" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sampleEvents.filter(e => e.category === 'Comedy').map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="Art" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sampleEvents.filter(e => e.category === 'Art').map((event) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Load More */}
            <div className="text-center">
              <Button variant="glass" size="lg" className="px-8">
                Load More Events
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Own <span className="gradient-text">Epic Event</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of event organizers who trust Showtime Central to bring their vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="px-8">
                  Create Event
                </Button>
                <Button variant="glass" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return <Index />;
};

export default Index;
