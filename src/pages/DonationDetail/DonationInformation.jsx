import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationInformation = ({ details }) => {
    const { id, image, title, description, text_btn_color, price } = details;

    const handleDonationConfirm = () => {
        const addDonationCart = [];
        const findDonationLists = JSON.parse(localStorage.getItem('donation_list'));

        if (!findDonationLists) {
            addDonationCart.push(details);
            localStorage.setItem('donation_list', JSON.stringify(addDonationCart));
            toast("Thanks for Donation", { autoClose: 1 });
        } else {
            const isExists = findDonationLists?.find(details => details.id === id);

            if (!isExists) {
                addDonationCart.push(...findDonationLists, details)
                localStorage.setItem('donation_list', JSON.stringify(addDonationCart));
                toast("Your Donation complete", { autoClose: 1 });
            } else {
                toast("Already Exist", { autoClose: 1 });
            }
        }
    };

    return (
        <div>
            <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
                <section className="">
                    <img className="w-full" src={image} alt="" />
                    <div className="relative -mt-[85px]">
                        <div className="overlay py-5">
                            <Link>
                                <button onClick={handleDonationConfirm} style={{ backgroundColor: text_btn_color, }} className="text-white font-semibold text-lg px-5 py-2 ml-5">Donate ${price}</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="my-12">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h2>
                    <p className="mt-5"><small>{description}</small></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationInformation;