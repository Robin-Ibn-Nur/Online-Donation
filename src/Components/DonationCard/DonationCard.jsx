import DonationCart from "../DonationCart/DonationCart";

const DonationCard = ({donations}) => {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                donations?.map(donation => <DonationCart key={donation.id} donation={donation}></DonationCart>)
            }
            </div>
        </div>
    );
};

export default DonationCard;