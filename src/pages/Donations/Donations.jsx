import { useEffect, useState } from "react";
import MyDonations from "./MyDonations";

const Donations = () => {
  const [donationInfo, setDonationInfo] = useState([]);
  const [emptyDonation, setEmptyDonation] = useState(false);

  const [isShowAllData, setIsShowAllData] = useState(true);

  useEffect(() => {
    const getDonationCard = JSON.parse(localStorage.getItem("donation_list"));
    if (getDonationCard) {
      setDonationInfo(getDonationCard);
    } else {
      setEmptyDonation("No donation available.");
    }
  }, []);

  return (
    <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
      {emptyDonation ? (
        <p className="text-center h-[60vh] flex justify-center items-center">
          {emptyDonation}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {
              isShowAllData ? donationInfo
                .slice(0, 4)
                .map((donate, index) => (
                  <MyDonations
                    key={index}
                    donate={donate}
                  ></MyDonations>
                )) : donationInfo.map((donate, index) => (
                  <MyDonations key={index} donate={donate}></MyDonations>
                ))
            }
          </div>
          <div className="flex justify-center items-center text-center mt-10 no_show">
            {isShowAllData && donationInfo.length > 4 && (
              <button onClick={() => setIsShowAllData(!isShowAllData)} className="bg-[#009444] text-sm font-medium mb-2 px-5 py-2 rounded-md text-white">
                {isShowAllData && "See more"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
