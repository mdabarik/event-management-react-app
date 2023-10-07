import workshopImage from "../../assets/workshop-bg.jpg";
import WorkshopBanner from "../../components/WorkshopBanner/WorkshopBanner";

const WorkShops = () => {
    return (
        <div className="w-[100vw] h-[85vh] absolute top-0 left-0 -z-10">
            <WorkshopBanner image={workshopImage}></WorkshopBanner>
        </div>
    );
};

export default WorkShops;