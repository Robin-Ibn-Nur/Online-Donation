
const MyDonations = ({donate}) => {
    const {image, title, text_btn_color,card_bg, price, btn_bg, category} = donate || {};

    return (
        <div>
            <div className="relative md:flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div style={{ backgroundColor: card_bg }} className="relative m-0 md:w-3/5 p-4">
                    <div className="py-4 px-2">
                        <button style={{ backgroundColor: btn_bg, color: text_btn_color }} className="text-sm font-medium mb-2 px-5 py-1">{category}</button>
                        <h2 style={{ color: text_btn_color }} className="text-base font-semibold ">{title}</h2>
                        <h3 style={{ color: text_btn_color }} className="font-semibold text-lg py-2 mb-3">${price.toFixed(2)}</h3>
                        <button style={{ backgroundColor: text_btn_color }} className="text-white text-sm font-medium mb-2 px-5 py-2 rounded-md">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDonations;