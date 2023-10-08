
const BgImage = ({ image, isFull }) => {
    return (
        <div className={`w-[100vw] ${isFull ? "h-[130vh]" : "h-[85vh]"} absolute top-0 -z-10`}>
            <img className="w-[100%] h-[100%] object-cover" src={image} alt="logo" />
            <div className="w-[100vw] h-[100%] bg-[#00000088] absolute top-0 left-0 z-10"></div>
        </div>
    );
};

export default BgImage;