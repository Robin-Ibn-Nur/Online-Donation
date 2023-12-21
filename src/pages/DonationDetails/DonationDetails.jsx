import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationInformation from "../DonationDetail/DonationInformation";

const DonationData = () => {
    const [details, setDetails] = useState({});
    
    const {id} = useParams();

    const DonationDetails = useLoaderData();

    useEffect(() => {
        const findDetails = DonationDetails?.find(detail => detail.id == id);
        setDetails(findDetails);
    }, [id, DonationData])

    return (
        <div>
            <DonationInformation details={details}></DonationInformation>
        </div>
    );
};

export default DonationData;