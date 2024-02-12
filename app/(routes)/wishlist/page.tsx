"use client";

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useWishlist from '@/hooks/use-wishlist';

import WishlistItem from './components/wishlist-item';


export const revalidate = 0;

const WishlistPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const Wishlist = useWishlist();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Wishlist</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {Wishlist.items.length === 0 && <p className="text-neutral-500">No items added to Wishlist.</p>}
              <ul>
                {Wishlist.items.map((item) => (
                  <WishlistItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default WishlistPage;