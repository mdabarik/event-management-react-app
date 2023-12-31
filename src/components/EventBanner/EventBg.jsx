

const EventBg = ({ image }) => {

    return (
        <div className="absolute top-0 -z-10 w-[100vw] h-[66vh]">
            <img className="w-[100%] h-[100%] object-cover" src={image} alt="logo" />
            <div className="w-[100vw] h-[100%] bg-[#00000088] absolute top-0 left-0 z-10"></div>
        </div>
    );
};

export default EventBg;