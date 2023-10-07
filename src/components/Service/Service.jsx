
const Service = ({ service }) => {
    return (
        <div className="text-white h-[200px] rounded-lg relative">
            <img className="w-full h-[200px] rounded-lg" src={service.image} alt="img" />
            <div className="absolute top-0 left-0 bg-[#00000090] w-full h-full rounded-lg"></div>
            <div className="">
                <h1 className="font-bold">{service.event}</h1>
                <p>{service.subtitle}</p>
            </div>
        </div>
    );
};

export default Service;