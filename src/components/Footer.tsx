
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ШИК</h3>
            <p className="text-gray-300 mb-4">
              Школьный лагерь с активной программой отдыха и образования для детей от 7 до 14 лет.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-camp-purple transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-camp-purple transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@shik-camp.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Московская обл., Подольский р-н, пос. Лесной, ул. Сосновая, 15</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-camp-purple transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-300 hover:text-camp-purple transition-colors">
                  Программа
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-camp-purple transition-colors">
                  Расписание
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-camp-purple transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-camp-purple transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ШИК. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;