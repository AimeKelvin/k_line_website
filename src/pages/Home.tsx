import React from 'react';
import { Hero } from '../components/Hero';
import { NewArrivals } from '../components/NewArrivals';
import { Bestsellers } from '../components/Bestsellers';
import { ChooseYourOwn } from '../components/ChooseYourOwn';
import { Collections } from '../components/Collections';
import { ContactBanner } from '../components/ContactBanner';
import { InstagramFeed } from '../components/InstagramFeed';

export function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <Bestsellers />
      <ChooseYourOwn />
      <Collections />
      <ContactBanner />
      <InstagramFeed />
    </main>);

}