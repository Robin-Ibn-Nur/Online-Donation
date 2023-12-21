import { useLoaderData } from "react-router-dom";
import DonationCard from "../../components/DonationCard/DonationCard";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    const donations = useLoaderData();

    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
            <DonationCard donations={donations}></DonationCard>
        </div>
        
        </div>
    );
};

export default Home;