import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Local Business Owner',
    content: 'The team at Hari Ohm Electronics repaired our office computers when we thought they were beyond saving. Fast service and very reasonable pricing. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Homemaker',
    content: 'My washing machine broke down right before a family function. The technicians came the same day and fixed it within an hour. Excellent service and very professional.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 3,
    name: 'Arun Menon',
    role: 'College Student',
    content: 'My laptop screen cracked before my final exams. They replaced it in just 24 hours and even helped recover some of my important files. Lifesavers!',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-no-repeat bg-cover"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 -left-6 opacity-20">
            <Quote className="h-24 w-24" />
          </div>
          
          <div 
            className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex-shrink-0">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-white border-opacity-20" 
                />
              </div>
              <div className="md:w-3/4">
                <p className="text-lg mb-6 text-blue-100 italic">"{testimonials[current].content}"</p>
                <div>
                  <h4 className="text-xl font-semibold">{testimonials[current].name}</h4>
                  <p className="text-blue-300">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === current ? 'bg-white' : 'bg-white bg-opacity-30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;