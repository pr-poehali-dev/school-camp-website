import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-camp-purple">ШИК</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-camp-blue transition-colors font-medium">
            Главная
          </Link>
          <Link to="/program" className="text-gray-700 hover:text-camp-blue transition-colors font-medium">
            Программа
          </Link>
          <Link to="/schedule" className="text-gray-700 hover:text-camp-blue transition-colors font-medium">
            Расписание
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-camp-blue transition-colors font-medium">
            Галерея
          </Link>
          <Link to="/contacts" className="text-gray-700 hover:text-camp-blue transition-colors font-medium">
            Контакты
          </Link>
          <Button className="bg-camp-purple hover:bg-camp-purple/90">
            Записаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-white border-t">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-camp-blue transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/program" 
              className="text-gray-700 hover:text-camp-blue transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </Link>
            <Link 
              to="/schedule" 
              className="text-gray-700 hover:text-camp-blue transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Расписание
            </Link>
            <Link 
              to="/gallery" 
              className="text-gray-700 hover:text-camp-blue transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </Link>
            <Link 
              to="/contacts" 
              className="text-gray-700 hover:text-camp-blue transition-colors font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="bg-camp-purple hover:bg-camp-purple/90 mt-2">
              Записаться
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;