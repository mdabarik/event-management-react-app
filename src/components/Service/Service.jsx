

const Service = ({ service }) => {
    return (
        <div className="text-white h-[250px] rounded-lg relative">
            <img className="w-full h-[250px] rounded-lg object-cover" src={service.image} alt="img" />
            <div className="absolute top-0 left-0 bg-[#00000090] w-full h-full rounded-lg"></div>
            <div className="absolute top-0 left-0 px-2 w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-sm md:text-2xl mb-1 text-center">{service.event}</h1>
                <p className="text-center text-[10px] md:text-sm">{service.subtitle}</p>
            </div>
        </div>
    );
};

export default Service;