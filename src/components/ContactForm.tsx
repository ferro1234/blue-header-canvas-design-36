import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Meno musí mať aspoň 2 znaky'),
  company: z.string().optional(),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Správa musí mať aspoň 10 znakov'),
  privacy: z.boolean().refine(val => val === true, 'Musíte súhlasiť s ochranou osobných údajov')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      privacy: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulácia odoslania emailu - tu by bola skutočná logika
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Správa odoslaná!",
        description: "Ďakujeme za vašu správu. Ozvoeme sa vám čo najskôr.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Chyba pri odosielaní",
        description: "Skúste to prosím znova alebo nás kontaktujte priamo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="bg-gradient-to-b from-blue-700 to-blue-900 py-12" aria-labelledby="kontakt-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 id="kontakt-heading" className="text-4xl font-bold text-white mb-4">Kontaktujte nás</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Kontaktné údaje</h3>
            <div className="space-y-2 text-blue-100">
              <p>Email: info@example.sk</p>
              <p>Telefón: +421 123 456 789</p>
              <p>Otváracie hodiny: Po-Pi 8:00-16:00</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-white mb-4">Rýchla odpoveď</h3>
            <p className="text-blue-100">
              Odpovieme vám do 24 hodín. Pre urgentné prípady nás kontaktujte telefonicky.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Meno a Priezvisko *"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-yellow-300" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Firma (Voliteľné)"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-yellow-300" />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="vas@email.sk *"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-yellow-300" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Tel. číslo (Voliteľné)"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-yellow-300" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Tu napíšte vašu správu *"
                        rows={4}
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 resize-none text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-yellow-300" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          id="privacy"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="bg-white/10 border-white/20 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                        />
                      </FormControl>
                      <Label htmlFor="privacy" className="text-blue-100 leading-relaxed cursor-pointer">
                        Potvrdzujem, že som si prečítal/a{' '}
                        <a href="#" className="text-yellow-400 hover:text-yellow-300 underline">
                          Ochranu osobných údajov
                        </a>
                        . *
                      </Label>
                    </div>
                    <FormMessage className="text-yellow-300" />
                  </FormItem>
                )}
              />
              
              <div className="text-center pt-2">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 text-lg font-bold py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Odosiela sa...' : 'Odoslať'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};