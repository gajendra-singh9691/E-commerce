import CustomJerseyDisplay from '../Component/CustomJerseyDisplay'
import FeaturedProducts from '../Component/FeaturedProducts'
import HeroSection from '../Component/HeroSection'
import JerseyShowcase from '../Component/JerseyShowcase'
import LatestJersey from '../Component/LatestJersey'
import OurProduct from '../Component/OurProduct'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LatestJersey />
      <FeaturedProducts />
      <JerseyShowcase />
      <OurProduct />
      <CustomJerseyDisplay />
    </div>
  )
}

export default Home
