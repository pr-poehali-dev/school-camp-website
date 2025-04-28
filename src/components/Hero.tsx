import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-camp-blue/10 to-camp-purple/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486128105845-91daff43f404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Дети в лагере" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-camp-purple mb-6">
            Школьный лагерь "Лесная Сказка"
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Незабываемые каникулы с пользой для ваших детей! 
            Активный отдых, новые друзья и увлекательные занятия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-camp-purple hover:bg-camp-purple/90 text-white">
              Записаться сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-camp-blue text-camp-blue hover:bg-camp-blue/10">
              <Link to="/program">Узнать программу</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
