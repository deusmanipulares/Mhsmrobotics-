import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center p-6 text-center transition-all hover:shadow-lg">
      <div className="rounded-full bg-primary/10 p-3">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}