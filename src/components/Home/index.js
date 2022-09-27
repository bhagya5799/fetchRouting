import './index.css'
import UserInfo from '../UserInfo'
import BlogLIst from '../BlogList'
import BlogItemDetails from '../BlogItemDetails'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogLIst />
  </div>
)

export default Home
