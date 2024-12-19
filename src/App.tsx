import { ArrowRight, BarChart3, Building2, Globe2, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              EntreNet provides all the tools and features you need to connect,
              collaborate, and grow your business.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Professional Networking"
              description="Connect with entrepreneurs, investors, and industry leaders. Build meaningful relationships that drive growth."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Knowledge Sharing"
              description="Share insights, ask questions, and learn from experienced professionals in your industry."
            />
            <FeatureCard
              icon={<Globe2 className="h-6 w-6" />}
              title="Global Community"
              description="Join a worldwide network of entrepreneurs and business professionals from diverse industries."
            />
            <FeatureCard
              icon={<Building2 className="h-6 w-6" />}
              title="Business Opportunities"
              description="Discover partnerships, investment opportunities, and potential clients within our community."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Growth Analytics"
              description="Track your network growth, engagement, and business impact with detailed analytics."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Mentorship"
              description="Connect with experienced mentors or become one yourself. Share knowledge and foster growth."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to grow your network?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join thousands of entrepreneurs and business professionals already
            growing their network on EntreNet.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 EntreNet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex flex-col items-center p-6 text-center transition-all hover:shadow-lg">
      <div className="rounded-full bg-primary/10 p-3">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}

export default App;