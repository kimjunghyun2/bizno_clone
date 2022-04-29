import Layout from "../_layout/layout";
import SearchLayout from "../_layout/searchlayout";
import HomeMain from "../components/home/homeMain";
import RealTimeSearch from "../components/comp_public/realtimeSearch";
import Banner from "../components/comp_public/banner";
import SwiperBanner from "../components/comp_public/swiperbanner";

const Home = () => {
    return (
        <SearchLayout>
            <HomeMain/>
            <RealTimeSearch/>
            <Banner/>
           
        </SearchLayout>
    )
}
export default Home;