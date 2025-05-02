
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  message: z.string().optional(),
});

const RegisterPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering. We will contact you soon.",
    });
    
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Register for Ayodhya Yatra" 
        subtitle="Sign up for updates and pilgrimage opportunities" 
        backgroundImage="/images/register-banner.jpg"
      />
      
      <div className="container mx-auto px-4 max-w-3xl mt-8 section-animate animated">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Pilgrimage Registration Form</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests or Questions</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any special requirements or questions for your pilgrimage" 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  className="bg-ayodhya-saffron hover:bg-ayodhya-orange text-white py-2 px-8 rounded-md text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        
        <div className="mt-8 bg-ayodhya-cream p-6 rounded-lg">
          <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">Why Register?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Receive updates about upcoming pilgrimages and events</li>
            <li>Get priority access to limited Darshan slots</li>
            <li>Receive guidance on planning your visit to Ayodhya</li>
            <li>Special prasad delivery options for those unable to visit in person</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
