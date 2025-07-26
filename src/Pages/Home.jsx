import CustomJerseyDisplay from '../Component/CustomJerseyDisplay'
import FeaturedProducts from '../Component/FeaturedProducts'
import JerseyShowcase from '../Component/JerseyShowcase'
import OurProduct from '../Component/OurProduct'


const Home = () => {
  return (
    <div>
      <FeaturedProducts />
      <JerseyShowcase />
      <OurProduct />
      <CustomJerseyDisplay />
    </div>
  )
}

export default Home
