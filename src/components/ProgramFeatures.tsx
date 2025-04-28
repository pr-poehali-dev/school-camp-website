
import { BookOpen, Brush, Users, LucideIcon, Bike, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProgramFeatureProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
};

const ProgramFeature = ({ title, description, icon: Icon, iconColor }: ProgramFeatureProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColor}`}>
          <Icon size={24} className="text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ProgramFeatures = () => {
  const features = [
    {
      title: "Образовательные программы",
      description: "Интерактивные занятия по науке, языкам и творческому мышлению",
      icon: BookOpen,
      iconColor: "bg-camp-blue",
    },
    {
      title: "Творческие мастерские",
      description: "Рисование, лепка, театральное мастерство и музыкальные занятия",
      icon: Brush,
      iconColor: "bg-camp-purple",
    },
    {
      title: "Командные игры",
      description: "Спортивные соревнования и квесты для развития командного духа",
      icon: Users,
      iconColor: "bg-camp-green",
    },
    {
      title: "Активный отдых",
      description: "Походы, велопрогулки и экскурсии в окрестностях лагеря",
      icon: Bike,
      iconColor: "bg-camp-orange",
    },
    {
      title: "Музыкальные вечера",
      description: "Концерты, дискотеки и музыкальные постановки для детей всех возрастов",
      icon: Music,
      iconColor: "bg-camp-yellow",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-camp-purple mb-4">
            Что ждет детей в нашем лагере
          </h2>
          <p className="text-xl text-gray-600">
            Разнообразная программа для развития навыков, творчества и отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ProgramFeature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
