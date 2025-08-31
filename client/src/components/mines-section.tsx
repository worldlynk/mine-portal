import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Map } from "lucide-react";
import type { Mine } from "@shared/schema";

export default function MinesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: mines = [], isLoading } = useQuery<Mine[]>({
    queryKey: ["/api/mines"],
  });

  const categories = [
    { id: "all", label: "All Mines" },
    { id: "rajasthan", label: "Rajasthan" },
    { id: "gujarat", label: "Gujarat" },
    { id: "madhya-pradesh", label: "Madhya Pradesh" },
    { id: "jharkhand", label: "Jharkhand" },
  ];

  const filteredMines = mines.filter(mine => 
    activeFilter === "all" || mine.state.toLowerCase().replace(" ", "-") === activeFilter
  );

  useEffect(() => {
    // Filter mine cards with animation
    const mineCards = document.querySelectorAll('.mine-card');
    mineCards.forEach((card: Element) => {
      const htmlCard = card as HTMLElement;
      const category = htmlCard.dataset.category;
      
      if (activeFilter === 'all' || category === activeFilter) {
        htmlCard.style.display = 'block';
        htmlCard.style.opacity = '0';
        setTimeout(() => {
          htmlCard.style.opacity = '1';
        }, 100);
      } else {
        htmlCard.style.opacity = '0';
        setTimeout(() => {
          htmlCard.style.display = 'none';
        }, 300);
      }
    });
  }, [activeFilter]);

  return (
    <section id="mines" className="py-20 bg-card" data-testid="mines-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="mines-title">
            Our <span className="text-primary">Premium Mines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="mines-description">
            Exclusive access to India's finest quartz deposits across multiple states, 
            ensuring consistent supply and superior quality.
          </p>
        </div>

        {/* Mine Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal-up" data-testid="mines-filters">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Mine Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-background border border-border rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="mines-grid">
            {filteredMines.map((mine, index) => (
              <Card 
                key={mine.id}
                className={`mine-card bg-background border border-border rounded-2xl overflow-hidden hover:border-primary reveal-up`}
                data-category={mine.state.toLowerCase().replace(" ", "-")}
                data-testid={`mine-card-${index}`}
              >
                <img 
                  src={mine.imageUrl} 
                  alt={`${mine.name} mining operation`} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold" data-testid={`mine-name-${index}`}>{mine.name}</h3>
                    <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mine.category === 'premium' ? 'bg-primary text-primary-foreground' :
                      mine.category === 'elite' ? 'bg-accent text-accent-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      {mine.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`mine-description-${index}`}>
                    {mine.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground flex items-center" data-testid={`mine-location-${index}`}>
                      <MapPin className="mr-1 h-4 w-4" />
                      {mine.location}
                    </div>
                    <button className="text-primary hover:text-accent transition-colors" data-testid={`mine-details-${index}`}>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View All Mines CTA */}
        <div className="text-center mt-16 reveal-up">
          <Button className="btn-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg" data-testid="button-view-all-mines">
            <Map className="mr-2" />
            View All 500+ Mine Locations
          </Button>
        </div>
      </div>
    </section>
  );
}
