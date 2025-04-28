
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Мама Миши, 9 лет",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Мой сын провел незабываемое лето в лагере \"Лесная Сказка\". Он нашел новых друзей и каждый день рассказывал мне, как интересно на занятиях. Особенно ему понравились походы и творческие мастерские!"
    },
    {
      name: "Сергей Иванов",
      role: "Папа Кати, 11 лет",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Дочь была в восторге от лагеря. Вожатые профессиональные и внимательные, а программа насыщенная. Ребенок стал более самостоятельным и уверенным в себе. Обязательно отправим ее снова в следующем году!"
    },
    {
      name: "Мария Смирнова",
      role: "Мама Димы, 8 лет",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Спасибо за прекрасную организацию и интересную программу! Сын вернулся из лагеря с новыми знаниями и навыками. Теперь он регулярно занимается спортом и увлекся рисованием. Рекомендую всем родителям!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-camp-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-camp-purple mb-4">
            Отзывы родителей
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят о нас и нашем лагере родители наших маленьких гостей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="pb-2 pt-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
