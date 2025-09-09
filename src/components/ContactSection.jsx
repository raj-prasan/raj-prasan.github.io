import React from 'react'
import { Linkedin, Mail, Code, Github, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast'
import { title } from 'framer-motion/client';
import { Description } from '@radix-ui/react-toast';
function ContactSection() {
  const {toast} = useToast();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTimeout(()=>{
      toast({
        title:"Message Sent!",
        description: "Working on the form section.Currently it'll not work."
      })
    }, 1500)
  }
  return (
    <section id="contact" className='py-24 px-24 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href='mailto:rajprasanj@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>rajprasanj@gmail.com</a>
                </div>
              </div>


              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Linkedin className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>LinkedIn</h4>
                  <a href='www.linkedin.com/in/prasan-raj' className='text-muted-foreground hover:text-primary transition-colors'>prasan-raj</a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Github className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>GitHub</h4>
                  <a href='https://github.com/raj-prasan' className='text-muted-foreground hover:text-primary transition-colors'>{"raj-prasan"}</a>
                </div>
              </div>

            </div>
          </div>
          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring- 2focus:ring-primary'
                  placeholder='Prasan Raj....'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Name</label>
                <input type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring- 2focus:ring-primary'
                  placeholder='john@email.com'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Name</label>
                <textarea 
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring- 2focus:ring-primary'
                  placeholder="Hello, i'd like to talk about...."
                />
              </div>

              <button className={cn('cosmic-button w-full flex items-center justify-center gap-2')}>
                <Send size={16}/>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection