'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
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
        <main className="pt-20">
          {/* Ethereal Motion */}
          <section id="ethereal_motion" className="py-24 text-center">
            <Text className="text-xs uppercase tracking-widest text-[#B8860B] mb-4 block"> Autumn / Winter 2024 </Text>
            <h1 className="text-5xl md:text-7xl font-serif text-primary dark:text-accent mb-8"> Ethereal Motion </h1>
            <p className="text-primary/60 dark:text-accent/60 max-w-lg mx-auto font-light italic"> A study in texture, light, and movement. </p>
          </section>
          {/* Midnight Silhouette */}
          <section id="midnight_silhouette" className="pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-24">
              {/* Look 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[3/4] bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden group">
                  <Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop" alt="Midnight Silhouette" />
                  {/* Hotspot */}
                  <div className="absolute top-1/2 left-1/2 cursor-pointer group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10"><div className="w-2 h-2 bg-[#B8860B] rounded-full"></div></div>
                    <div className="absolute top-1/2 left-full ml-4 bg-white/90 dark:bg-primary/90 backdrop-blur px-4 py-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-serif text-primary dark:text-accent"> Silk Evening Dress </p>
                      <p className="text-[10px] text-[#B8860B] uppercase tracking-widest mt-1"> Shop Now </p>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <Text className="text-6xl font-serif text-primary/5 dark:text-accent/5 absolute -translate-y-12 -translate-x-8"> 01 </Text>
                  <h2 className="text-3xl font-serif text-primary dark:text-accent mb-6 relative"> Midnight Silhouette </h2>
                  <p className="text-primary/70 dark:text-accent/70 font-light leading-relaxed mb-8">
                     Inspired by the depth of the night sky, this ensemble plays with shadow and light. The silk drapes effortlessly, creating fluid lines that move with the body. 
                  </p>
                  <Link variant="inline" className="inline-flex items-center text-sm uppercase tracking-widest text-[#B8860B] hover:text-primary dark:hover:text-accent transition-colors" href="product-detail.html"> Shop the Look 
                  <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </div>
              </div>
              {/* Look 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 aspect-[3/4] bg-[#e8e4dc]/30 dark:bg-[#252525] relative overflow-hidden group">
                  <Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop" alt="Golden Hour" />
                </div>
                <div className="lg:order-1 lg:pr-12 text-right">
                  <Text className="text-6xl font-serif text-primary/5 dark:text-accent/5 absolute right-0 -translate-y-12"> 02 </Text>
                  <h2 className="text-3xl font-serif text-primary dark:text-accent mb-6 relative"> Golden Hour </h2>
                  <p className="text-primary/70 dark:text-accent/70 font-light leading-relaxed mb-8">
                     Capturing the warmth of the late afternoon sun. Rich textures and warm tones combine to create a look that is both comfortable and undeniably chic. 
                  </p>
                  <Link variant="inline" className="inline-flex items-center text-sm uppercase tracking-widest text-[#B8860B] hover:text-primary dark:hover:text-accent transition-colors" href="product-detail.html"> Shop the Look 
                  <ArrowLeft className="w-4 h-4 mr-2" /></Link>
                </div>
              </div>
              {/* Look 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] bg-[#dcdcdc]/30 dark:bg-[#1a1a1a] relative overflow-hidden group lg:col-span-2">
                  <Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop" alt="Urban Essentials" />
                  <div className="absolute bottom-12 left-12 max-w-md bg-white/90 dark:bg-primary/90 backdrop-blur p-8">
                    <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> Urban Essentials </h2>
                    <p className="text-sm text-primary/70 dark:text-accent/70 font-light mb-6">
                       Reimagining everyday staples with premium materials and precise tailoring. 
                    </p>
                    <Link className="text-xs uppercase tracking-widest text-[#B8860B] hover:underline" href="product-detail.html"> Shop Collection </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                  <input placeholder="Enter your email" type="email" className="px-4 py-2 bg-white dark:bg-primary border border-primary/20 dark:border-accent/20 text-primary dark:text-accent focus:outline-none focus:border-[#B8860B] transition-colors text-sm" />
                  <Button variant="primary" contentKey="cta_15" className="px-4 py-2 bg-primary dark:bg-accent text-accent dark:text-primary text-sm uppercase tracking-widest hover:bg-[#B8860B] dark:hover:bg-[#B8860B] dark:hover:text-white transition-colors" type="button"> Subscribe </Button>
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
