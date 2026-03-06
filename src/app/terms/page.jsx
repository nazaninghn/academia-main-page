'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import { Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
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
        <main className="pt-20 lg:pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <article className="prose prose-stone dark:prose-invert max-w-none space-y-12 text-primary/80 dark:text-accent/80 font-light">
              {/* 1 Agreement To Terms */}
              <section id="1_agreement_to_terms">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 1. Agreement to Terms </h2>
                <p className="leading-relaxed mb-4">
                   These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and LUXE ("we," "us" or "our"), concerning your access to and use of the LUXE website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). 
                </p>
                <p className="leading-relaxed">
                   You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms of service, then you are expressly prohibited from using the Site and you must discontinue use immediately. 
                </p>
              </section>
              {/* 2 Intellectual Property Rights */}
              <section id="2_intellectual_property_rights">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 2. Intellectual Property Rights </h2>
                <p className="leading-relaxed mb-4">
                   Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws. 
                </p>
              </section>
              {/* 3 User Representations */}
              <section id="3_user_representations">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 3. User Representations </h2>
                <p className="leading-relaxed mb-4"> By using the Site, you represent and warrant that: </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#B8860B]">
                  <li>
                     All registration information you submit will be true, accurate, current, and complete. 
                  </li>
                  <li>
                     You will maintain the accuracy of such information and promptly update such registration information as necessary. 
                  </li>
                  <li>
                     You have the legal capacity and you agree to comply with these Terms of Service. 
                  </li>
                  <li>
                     You are not a minor in the jurisdiction in which you reside. 
                  </li>
                </ul>
              </section>
              {/* 4 Purchases And Payment */}
              <section id="4_purchases_and_payment">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 4. Purchases and Payment </h2>
                <p className="leading-relaxed">
                   We accept the following forms of payment: Visa, Mastercard, American Express, PayPal. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. 
                </p>
              </section>
              {/* 5 Returns And Refunds */}
              <section id="5_returns_and_refunds">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 5. Returns and Refunds </h2>
                <p className="leading-relaxed">
                   Please review our Return Policy posted on the Site prior to making any purchases. 
                </p>
              </section>
              {/* 6 Contact Us */}
              <section id="6_contact_us">
                <h2 className="text-2xl font-serif text-primary dark:text-accent mb-4"> 6. Contact Us </h2>
                <p className="leading-relaxed">
                   In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: 
                </p>
                <address className="not-italic mt-4 text-primary/60 dark:text-accent/60">
                   LUXE Legal Department 
                  <br />
                   123 Rue de Rivoli 
                  <br />
                   75001 Paris, France 
                  <br />
                  <Link className="text-[#B8860B] hover:underline" href="mailto:legal@luxe.com"> legal@luxe.com </Link>
                </address>
              </section>
            </article>
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
                  <input placeholder="Enter your email" type="email" className="px-4 py-2 bg-white dark:bg-primary border border-primary/20 dark:border-accent/20 text-primary dark:text-accent focus:outline-none focus:border-[#B8860B] transition-colors text-sm" />
                  <Button variant="primary" contentKey="cta_20" className="px-4 py-2 bg-primary dark:bg-accent text-accent dark:text-primary text-sm uppercase tracking-widest hover:bg-[#B8860B] dark:hover:bg-[#B8860B] dark:hover:text-white transition-colors" type="button"> Subscribe </Button>
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
