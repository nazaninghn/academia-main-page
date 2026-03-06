'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { Lock, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
import { Text } from '@/components/Text';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="font-body bg-accent dark:bg-primary text-primary dark:text-accent font-sans antialiased overflow-x-hidden selection:bg-[#B8860B] selection:text-white">
      <>
        <header onScroll={() => { scrolled = (window.pageYOffset > 20) }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-accent dark:bg-primary ${`${scrolled ? 'border-primary/5 dark:border-[#F5E6D3]/10' : ''}`}`}>
          <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex items-center justify-between h-20">
              {/* Mobile Menu Button */}
              <button aria-expanded={mobileMenuOpen} onClick={() => { setMobileMenuOpen(true) }} aria-controls="mobile-menu" type="button" className="lg:hidden p-2 text-primary dark:text-accent">
                <Text className="sr-only"> Open menu </Text>
                <Menu className="w-6 h-6" />
              </button>
              {/* Logo */}
              <div className="flex items-center">
                <Link className="flex items-center" href="index.html"><Text variant="bold" className="text-2xl font-serif font-bold tracking-widest text-primary dark:text-accent"> LUXE </Text>
                <Text className="text-2xl font-serif text-[#B8860B]"> . </Text></Link>
              </div>
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-12">
                <Link className="text-sm uppercase tracking-widest text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="index.html"> Home </Link>
                <Link className="text-sm uppercase tracking-widest text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="products.html"> Shop </Link>
                <Link className="text-sm uppercase tracking-widest text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="lookbook.html"> Lookbook </Link>
                <Link className="text-sm uppercase tracking-widest text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="about.html"> About </Link>
                <Link className="text-sm uppercase tracking-widest text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="contact.html"> Contact </Link>
              </div>
              {/* Icons */}
              <div className="flex items-center space-x-6">
                {/* Dark Mode Toggle */}
                <button onClick={() => { toggleDarkMode() }} aria-label="Toggle Dark Mode" className="p-2 text-primary dark:text-accent hover:text-[#B8860B] transition-colors focus:outline-none">
                  <Sun className="w-5 h-5 block dark:hidden" />
                  <Moon className="w-5 h-5 hidden dark:block" />
                </button>
                {/* Search */}
                <Button variant="primary" className="p-2 text-primary dark:text-accent hover:text-[#B8860B] transition-colors"><Search className="w-5 h-5" /></Button>
                {/* Cart */}
                <Link className="p-2 text-primary dark:text-accent hover:text-[#B8860B] transition-colors relative" href="cart.html"><ShoppingBag className="w-5 h-5" />
                <Text variant="bold" className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-accent transform translate-x-1/4 -translate-y-1/4 bg-[#B8860B] rounded-full"> 2 </Text></Link>
              </div>
            </div>
          </nav>
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div aria-modal="true" role="dialog" className="relative z-[60] lg:hidden">
              {/* Background backdrop */}
              {mobileMenuOpen && (
                <div onClick={() => { setMobileMenuOpen(false) }} aria-hidden="true" className="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>
              )}
              <div className="fixed inset-0 z-40 flex">
                {/* Panel */}
                {mobileMenuOpen && (
                  <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-accent dark:bg-primary pb-12 shadow-xl">
                    <div className="flex px-4 pb-2 pt-5 justify-between items-center">
                      <Link className="flex items-center" href="index.html"><Text variant="bold" className="text-2xl font-serif font-bold tracking-widest text-primary dark:text-accent"> LUXE </Text>
                      <Text className="text-2xl font-serif text-[#B8860B]"> . </Text></Link>
                      <button onClick={() => { setMobileMenuOpen(false) }} type="button" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-primary dark:text-accent">
                        <Text className="sr-only"> Close menu </Text>
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    {/* Links */}
                    <div className="mt-8 space-y-6 border-t border-gray-200 dark:border-gray-700 px-4 py-6">
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="index.html"> Home </Link>
                      </div>
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="products.html"> Shop </Link>
                      </div>
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="lookbook.html"> Lookbook </Link>
                      </div>
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="about.html"> About </Link>
                      </div>
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="contact.html"> Contact </Link>
                      </div>
                    </div>
                    <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 px-4 py-6">
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="cart.html"> Cart (2) </Link>
                      </div>
                      <div className="flow-root">
                        <Link className="-m-2 block p-2 font-medium text-primary dark:text-accent" href="login.html"> Sign in </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </header>
        <main className="pt-20 lg:pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-serif text-primary dark:text-accent mb-12 text-center lg:text-left"> Checkout </h1>
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Checkout Form */}
              <div className="lg:col-span-7 space-y-12">
                {/* Contact Information */}
                <section id="contact_information">
                  <h2 className="text-lg font-serif mb-6 text-primary dark:text-accent"> Contact Information </h2>
                  <div className="space-y-4">
                    <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="email" placeholder="Email address" />
                    <label className="flex items-center space-x-2 text-sm text-primary/70 dark:text-accent/70">
                      <Input variant="text" className="rounded border-gray-300 text-[#B8860B] focus:ring-[#B8860B]" type="checkbox" />
                      <Text> Email me with news and offers </Text>
                    </label>
                  </div>
                </section>
                {/* Shipping Address */}
                <section id="shipping_address">
                  <h2 className="text-lg font-serif mb-6 text-primary dark:text-accent"> Shipping Address </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="First name" />
                      <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="Last name" />
                    </div>
                    <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="Address" />
                    <div className="grid grid-cols-3 gap-4">
                      <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="City" />
                      <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="State" />
                      <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="text" placeholder="ZIP Code" />
                    </div>
                    <Input className="w-full px-4 py-3 bg-transparent border border-primary/20 dark:border-accent/20 focus:outline-none focus:border-[#B8860B] transition-colors" type="tel" placeholder="Phone" />
                  </div>
                </section>
                {/* Payment */}
                <section id="payment">
                  <h2 className="text-lg font-serif mb-6 text-primary dark:text-accent"> Payment </h2>
                  <div className="border border-primary/20 dark:border-accent/20 p-4">
                    <p className="text-sm text-primary/60 dark:text-accent/60 italic">
                       This is a demo template. Contact forms and checkout are illustrative. 
                    </p>
                  </div>
                </section>
                <Button variant="primary" contentKey="cta_15" className="w-full bg-primary dark:bg-accent text-accent dark:text-primary py-4 uppercase tracking-widest text-sm hover:bg-[#B8860B] dark:hover:bg-[#B8860B] dark:hover:text-white transition-colors"> Pay Now </Button>
                <p className="text-center text-xs text-primary/50 dark:text-accent/50 mt-4">
                  <Lock className="w-3 h-3 inline mr-1" />
                   Secure checkout 
                </p>
              </div>
              {/* Order Summary */}
              <div className="lg:col-span-5 mt-12 lg:mt-0">
                <div className="bg-[#F5E6D3]/20 dark:bg-primary border border-primary/10 dark:border-accent/10 p-8 sticky top-28">
                  <h2 className="text-lg font-serif mb-6 text-primary dark:text-accent"> Order Summary </h2>
                  <div className="space-y-6 mb-8">
                    {/* Item */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-20 bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden rounded-sm group">
                        <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" alt="Silk Evening Dress" />
                        <Text variant="bold" className="absolute top-0 right-0 bg-[#B8860B] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full -mr-1 -mt-1 font-bold z-10"> 1 </Text>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-primary dark:text-accent"> Silk Evening Dress </h3>
                        <p className="text-xs text-primary/60 dark:text-accent/60"> S / Midnight Blue </p>
                      </div>
                      <Text className="text-sm text-primary dark:text-accent"> $895 </Text>
                    </div>
                    {/* Item */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-20 bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden rounded-sm group">
                        <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2535&auto=format&fit=crop" alt="Leather Handbag" />
                        <Text variant="bold" className="absolute top-0 right-0 bg-[#B8860B] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full -mr-1 -mt-1 font-bold z-10"> 1 </Text>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-primary dark:text-accent"> Leather Handbag </h3>
                        <p className="text-xs text-primary/60 dark:text-accent/60"> Black </p>
                      </div>
                      <Text className="text-sm text-primary dark:text-accent"> $2,100 </Text>
                    </div>
                  </div>
                  <div className="border-t border-primary/10 dark:border-accent/10 pt-6 space-y-3">
                    <div className="flex justify-between text-sm text-primary/70 dark:text-accent/70">
                      <Text> Subtotal </Text>
                      <Text> $2,995 </Text>
                    </div>
                    <div className="flex justify-between text-sm text-primary/70 dark:text-accent/70">
                      <Text> Shipping </Text>
                      <Text> Free </Text>
                    </div>
                  </div>
                  <div className="border-t border-primary/10 dark:border-accent/10 pt-6 mt-6">
                    <div className="flex justify-between items-end">
                      <Text className="text-base text-primary dark:text-accent"> Total </Text>
                      <div>
                        <Text className="text-xs text-primary/50 dark:text-accent/50 mr-2"> USD </Text>
                        <Text className="text-xl font-medium text-primary dark:text-accent"> $2,995 </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-accent dark:bg-primary border-t border-primary/10 dark:border-[#F5E6D3]/10 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <Link className="flex items-center mb-6" href="index.html"><Text variant="bold" className="text-2xl font-serif font-bold tracking-widest text-primary dark:text-accent"> LUXE </Text>
                <Text className="text-2xl font-serif text-[#B8860B]"> . </Text></Link>
                <p className="text-primary/70 dark:text-accent/70 text-sm leading-relaxed mb-6 font-light">
                   Redefining modern luxury with sustainable practices and timeless design for the conscious consumer. 
                </p>
                <div className="flex space-x-4">
                  {/* Twitter/X */}
                  <Link className="text-primary/60 dark:text-accent/60 hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="javascript:void(0)"><Text className="sr-only"> Twitter </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 128 128" fill="currentColor"><path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"></path></Icon></Link>
                  {/* Facebook */}
                  <Link className="text-primary/60 dark:text-accent/60 hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="javascript:void(0)"><Text className="sr-only"> Facebook </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 128 128" fill="currentColor"><path d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path></Icon></Link>
                  {/* LinkedIn */}
                  <Link className="text-primary/60 dark:text-accent/60 hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors" href="javascript:void(0)"><Text className="sr-only"> LinkedIn </Text>
                  <Icon className="w-5 h-5" viewBox="0 0 128 128" fill="currentColor"><path d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></Icon></Link>
                </div>
              </div>
              {/* Shop Column */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-accent mb-6"> Shop </h3>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="products.html"> New Arrivals </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="products.html"> Best Sellers </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="products.html"> Accessories </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="lookbook.html"> Lookbook </Link>
                  </li>
                </ul>
              </div>
              {/* Support Column */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-accent mb-6"> Support </h3>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="contact.html"> Contact Us </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="contact.html"> Shipping & Returns </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="contact.html"> FAQ </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-primary/70 dark:text-accent/70 hover:text-[#B8860B] transition-colors" href="contact.html"> Size Guide </Link>
                  </li>
                </ul>
              </div>
              {/* Subscribe Column */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-accent mb-6"> Stay in the Loop </h3>
                <p className="text-primary/70 dark:text-accent/70 text-sm mb-4 font-light">
                   Subscribe to receive updates, access to exclusive deals, and more. 
                </p>
                <form className="flex flex-col space-y-2">
                  <Input variant="text" className="px-4 py-2 bg-white dark:bg-primary border border-primary/20 dark:border-accent/20 text-primary dark:text-accent focus:outline-none focus:border-[#B8860B] transition-colors text-sm" type="email" placeholder="Enter your email" />
                  <Button variant="primary" contentKey="cta_16" className="px-4 py-2 bg-primary dark:bg-accent text-accent dark:text-primary text-sm uppercase tracking-widest hover:bg-[#B8860B] dark:hover:bg-[#B8860B] dark:hover:text-white transition-colors" type="button"> Subscribe </Button>
                </form>
              </div>
            </div>
            <div className="border-t border-primary/10 dark:border-[#F5E6D3]/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-primary/50 dark:text-accent/50"> © 2024 Luxe Commerce. All rights reserved. </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link className="text-xs text-primary/50 dark:text-accent/50 hover:text-[#B8860B] transition-colors" href="privacy.html"> Privacy Policy </Link>
                <Link className="text-xs text-primary/50 dark:text-accent/50 hover:text-[#B8860B] transition-colors" href="terms.html"> Terms of Service </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
