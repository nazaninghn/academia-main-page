'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { ChevronDown, Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("details");

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
        <main className="pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
              {/* Gallery Section */}
              <div className="space-y-4">
                {/* Main Image (Real Image) */}
                <div className="aspect-[3/4] w-full bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden group cursor-img">
                  <Image variant="cover" className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 origin-center cursor-zoom-in" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop" alt="Silk Evening Dress Front" />
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] w-full bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden">
                    <Image variant="cover" className="absolute inset-0 w-full h-full object-cover hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" alt="Silk Evening Dress Back" />
                  </div>
                  <div className="aspect-[3/4] w-full bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] relative overflow-hidden">
                    <Image variant="cover" className="absolute inset-0 w-full h-full object-cover hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Fabric Detail" />
                  </div>
                </div>
              </div>
              {/* Product Info */}
              <div className="mt-10 lg:mt-0 lg:sticky lg:top-28 h-fit">
                <div className="mb-8">
                  <Text className="text-xs uppercase tracking-widest text-[#B8860B] mb-2 block"> New Arrival </Text>
                  <h1 className="text-3xl lg:text-4xl font-serif text-primary dark:text-accent mb-2"> Silk Evening Dress </h1>
                  <p className="text-xl text-primary dark:text-accent"> $895 </p>
                </div>
                <div className="prose prose-sm dark:prose-invert font-light text-primary/80 dark:text-accent/80 mb-8">
                  <p>
                     Expertly crafted from 100% mulberry silk, this evening dress features a fluid silhouette that drapes elegantly across the body. The deep navy hue captures the essence of midnight sophistication. 
                  </p>
                </div>
                {/* Size Selector */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <Text className="text-sm font-medium uppercase tracking-widest text-primary dark:text-accent"> Size </Text>
                    <Button variant="primary" className="text-xs text-primary/60 dark:text-accent/60 underline hover:text-[#B8860B]"> Size Guide </Button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <button onClick={() => { setSelectedSize('XS') }} className={`py-3 text-sm font-medium border transition-colors ${selectedSize === 'XS' ? 'border-primary dark:border-accent bg-primary dark:bg-accent text-accent dark:text-primary' : 'border-primary/20 dark:border-accent/20 text-primary dark:text-accent hover:border-primary dark:hover:border-accent'}`}> XS </button>
                    <button onClick={() => { setSelectedSize('S') }} className={`py-3 text-sm font-medium border transition-colors ${selectedSize === 'S' ? 'border-primary dark:border-accent bg-primary dark:bg-accent text-accent dark:text-primary' : 'border-primary/20 dark:border-accent/20 text-primary dark:text-accent hover:border-primary dark:hover:border-accent'}`}> S </button>
                    <button onClick={() => { setSelectedSize('M') }} className={`py-3 text-sm font-medium border transition-colors ${selectedSize === 'M' ? 'border-primary dark:border-accent bg-primary dark:bg-accent text-accent dark:text-primary' : 'border-primary/20 dark:border-accent/20 text-primary dark:text-accent hover:border-primary dark:hover:border-accent'}`}> M </button>
                    <button onClick={() => { setSelectedSize('L') }} className={`py-3 text-sm font-medium border transition-colors ${selectedSize === 'L' ? 'border-primary dark:border-accent bg-primary dark:bg-accent text-accent dark:text-primary' : 'border-primary/20 dark:border-accent/20 text-primary dark:text-accent hover:border-primary dark:hover:border-accent'}`}> L </button>
                    <button onClick={() => { setSelectedSize('XL') }} className={`py-3 text-sm font-medium border transition-colors ${selectedSize === 'XL' ? 'border-primary dark:border-accent bg-primary dark:bg-accent text-accent dark:text-primary' : 'border-primary/20 dark:border-accent/20 text-primary dark:text-accent hover:border-primary dark:hover:border-accent'}`}> XL </button>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex space-x-4 mb-12">
                  <Button variant="primary" contentKey="cta_15" className="flex-1 bg-primary dark:bg-accent text-accent dark:text-primary py-4 uppercase tracking-widest text-sm hover:bg-[#B8860B] dark:hover:bg-[#B8860B] dark:hover:text-white transition-colors"> Add to Cart </Button>
                  <Button variant="primary" className="p-4 border border-primary/20 dark:border-accent/20 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors"><Heart className="w-5 h-5" /></Button>
                </div>
                {/* Details Accordion */}
                <div className="border-t border-primary/10 dark:border-accent/10">
                  {/* Item 1 */}
                  <div className="border-b border-primary/10 dark:border-accent/10">
                    <button onClick={() => { setActive(active === 'details' ? null : 'details') }} className="flex justify-between items-center w-full py-4 text-left">
                      <Text className="text-sm font-medium uppercase tracking-widest text-primary dark:text-accent"> Details & Care </Text>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </button>
                    {active === 'details' && (
                      <div x-collapse="" className="pb-4 text-sm font-light text-primary/70 dark:text-accent/70">
                        <ul className="list-disc pl-5 space-y-1">
                          <li> 100% Mulberry Silk </li>
                          <li> Lining: 100% Viscose </li>
                          <li> Dry clean only </li>
                          <li> Made in Italy </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* Item 2 */}
                  <div className="border-b border-primary/10 dark:border-accent/10">
                    <button onClick={() => { setActive(active === 'shipping' ? null : 'shipping') }} className="flex justify-between items-center w-full py-4 text-left">
                      <Text className="text-sm font-medium uppercase tracking-widest text-primary dark:text-accent"> Shipping & Returns </Text>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </button>
                    {active === 'shipping' && (
                      <div x-collapse="" className="pb-4 text-sm font-light text-primary/70 dark:text-accent/70">
                        <p>
                           Free complimentary shipping on all orders over $500. Returns accepted within 30 days of delivery. 
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* You May Also Like */}
          <section id="you_may_also_like" className="py-24 border-t border-primary/5 dark:border-accent/5 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif text-primary dark:text-accent mb-12 text-center"> You May Also Like </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Related 1 */}
                <div className="group">
                  <Link className="block relative aspect-[3/4] bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] mb-4 overflow-hidden" href="product-detail.html"><Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop" alt="Velvet Clutch" /></Link>
                  <h3 className="text-sm font-serif text-primary dark:text-accent"> Velvet Clutch </h3>
                  <Text className="text-xs text-primary/60 dark:text-accent/60"> $295 </Text>
                </div>
                {/* Related 2 */}
                <div className="group">
                  <Link className="block relative aspect-[3/4] bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] mb-4 overflow-hidden" href="product-detail.html"><Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" alt="Pearl Earrings" /></Link>
                  <h3 className="text-sm font-serif text-primary dark:text-accent"> Pearl Earrings </h3>
                  <Text className="text-xs text-primary/60 dark:text-accent/60"> $450 </Text>
                </div>
                {/* Related 3 */}
                <div className="group">
                  <Link className="block relative aspect-[3/4] bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] mb-4 overflow-hidden" href="product-detail.html"><Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop" alt="Satin Heels" /></Link>
                  <h3 className="text-sm font-serif text-primary dark:text-accent"> Satin Heels </h3>
                  <Text className="text-xs text-primary/60 dark:text-accent/60"> $620 </Text>
                </div>
                {/* Related 4 */}
                <div className="group">
                  <Link className="block relative aspect-[3/4] bg-[#F5E6D3]/30 dark:bg-[#2d2d2d] mb-4 overflow-hidden" href="product-detail.html"><Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop" alt="Silk Belt" /></Link>
                  <h3 className="text-sm font-serif text-primary dark:text-accent"> Silk Belt </h3>
                  <Text className="text-xs text-primary/60 dark:text-accent/60"> $150 </Text>
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
