import { Link } from 'react-router-dom';
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
];


const OurProduct = () => {
    return (
        <div className="p-2 mt-2 flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold mb-4 text-center">Our Product</h1>
            <div className="rounded shadow ">
                <div className='border-b-2 border-gray-300 flex items-center justify-between px-2'>
                  <h3 className='font-extrabold text-3xl md:text-4xl p-4'>Cricket</h3>
                  <Link to='/cricket-jersey' className='text-xl '>More Items</Link>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-2 py-2'>
                    {
                        products.map((product,index) => {
                            return <JerseyCart key={index} product={product} />
                        })
                    }
                </div>
            </div>
            <div className="rounded shadow mt-2">
                <div className='border-b-2 border-gray-300 flex items-center justify-between px-2'>
                  <h3 className='font-extrabold text-3xl md:text-4xl p-4'>Football</h3>
                  <Link to='/football-jersey' className='text-xl'>More Items</Link>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-2 py-2'>
                    {
                        products.map((product,index) => {
                            return <JerseyCart key={index} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurProduct
