import React from 'react'
import JerseyCart from '../Component/jerseyCart';
const products = [
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
  {
    name: 'Black Jersey',
    description: 'Iconic design meets uncompromising',
    price: '$59.99',
    image: 'https://mysportsjersey.in/wp-content/uploads/2024/05/32-1.webp', // Replace with your image path
  },
  {
    name: 'White Polo',
    description: 'Elevate your casual style with our premium',
    price: '$49.99',
    image: 'https://indiansoccermart.in/cdn/shop/files/8cb87b92aaa0bbb536c7a119d512f2f6.png-z-0_0_f-webp_grande.webp?v=1713874455',
  },
  {
    name: 'Featured',
    description: 'Discover our diverse range of',
    price: '$54.99',
    image: 'https://images.fancode.com/media/catalog/product/m/u/mumbai_indians_official_mens_player_edition_jersey_2025_customised(2).png',
  },
];
const Football = () => {
  return (
    <div className='p-8 pt-15 flex flex-wrap gap-4 justify-center items-center'>
      {
        products.map((product,index)=>{
          return <JerseyCart key={index} product={product} />
        })
      }
    </div>
  )
}

export default Football