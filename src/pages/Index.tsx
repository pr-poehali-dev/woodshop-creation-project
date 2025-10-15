import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    { id: 1, title: 'Обеденный стол из дуба', category: 'tables', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/995eb793-6ade-4afe-8c3e-5df0ada763fc.jpg' },
    { id: 2, title: 'Книжный шкаф', category: 'shelves', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/2719e1c4-a03f-4824-9c91-7420acec7af8.jpg' },
    { id: 3, title: 'Резная рамка', category: 'decor', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/bfa0764a-e8e5-4c6a-8bd9-81cb87b2a10c.jpg' },
    { id: 4, title: 'Журнальный стол', category: 'tables', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/995eb793-6ade-4afe-8c3e-5df0ada763fc.jpg' },
    { id: 5, title: 'Деревянная полка', category: 'shelves', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/2719e1c4-a03f-4824-9c91-7420acec7af8.jpg' },
    { id: 6, title: 'Декоративное панно', category: 'decor', image: 'https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/bfa0764a-e8e5-4c6a-8bd9-81cb87b2a10c.jpg' },
  ];

  const categories = [
    { id: 'all', label: 'Все работы', icon: 'LayoutGrid' },
    { id: 'tables', label: 'Столы', icon: 'Table' },
    { id: 'shelves', label: 'Шкафы и полки', icon: 'BookOpen' },
    { id: 'decor', label: 'Декор', icon: 'Sparkles' },
  ];

  const services = [
    { title: 'Изготовление мебели', description: 'Столы, стулья, шкафы по индивидуальным размерам', icon: 'Hammer' },
    { title: 'Реставрация', description: 'Восстановление старинной и антикварной мебели', icon: 'WrenchIcon' },
    { title: 'Резьба по дереву', description: 'Декоративные элементы и художественные работы', icon: 'Scissors' },
    { title: 'Консультации', description: 'Помощь в выборе материалов и дизайна', icon: 'MessageCircle' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'services', 'about', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-heading font-bold text-primary">Мастерская</h2>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'О нас' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
                Ремесло в каждой детали
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Создаём уникальную мебель и предметы интерьера из натурального дерева с 2005 года.
                Традиционные методы обработки и современный дизайн.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-primary hover:bg-accent">
                  Смотреть работы
                </Button>
                <Button onClick={() => scrollToSection('contacts')} variant="outline" size="lg">
                  Связаться
                </Button>
              </div>
            </div>
            <div className="animate-slide-in">
              <img
                src="https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/2719e1c4-a03f-4824-9c91-7420acec7af8.jpg"
                alt="Столярная мастерская"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждая работа создана вручную с вниманием к деталям и любовью к дереву
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className="gap-2"
              >
                <Icon name={cat.icon} size={18} />
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный цикл работ от эскиза до готового изделия
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/35d48894-eaae-401b-8b5b-ec27b09f5291/files/bfa0764a-e8e5-4c6a-8bd9-81cb87b2a10c.jpg"
              alt="Мастер за работой"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">О мастерской</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Наша мастерская существует с 2005 года. За это время мы создали сотни уникальных изделий
                для домов, ресторанов и офисов по всей России.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Мы работаем с благородными породами дерева: дубом, ясенем, орехом. Используем традиционные
                столярные соединения и проверенные временем технологии обработки.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Каждое изделие создаётся вручную опытными мастерами. Мы гордимся качеством нашей работы
                и даём гарантию на все изделия.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">ручная работа</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>
          
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Мастеров, д. 15</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@masterskaya.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: по записи</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-8 bg-primary hover:bg-accent" size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-90">© 2024 Столярная мастерская. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
