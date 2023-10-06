
import workshopImage from "../../assets/workshop-bg.jpg";
import BgImage from "../../components/BgImage/BgImage";

const WorkShops = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-white">This is Workshop</h1>
            <BgImage image={workshopImage}></BgImage>
        </div>
    );
};

export default WorkShops;