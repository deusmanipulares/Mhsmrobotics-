import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Connect. Grow.{' '}
              <span className="text-blue-600">Succeed Together.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              EntreNet is the professional network built for entrepreneurs,
              business leaders, and innovators. Connect with like-minded
              professionals, share insights, and grow your business.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg lg:mx-0">
              <Button size="lg" className="w-full sm:w-auto">
                Join EntreNet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}