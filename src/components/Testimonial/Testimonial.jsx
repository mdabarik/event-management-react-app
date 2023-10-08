import LogoTestimonial from "../../assets/testimonial-logo.png";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

const Testimonial = ({ testimonial }) => {

    return (
        <div className="text-white h-[350px] flex flex-col items-center justify-center rounded-lg relative">
            <img className="w-full h-[350px] rounded-lg" src={testimonial?.img} alt="img" />
            <div className="absolute top-0 left-0 bg-[#00000090] w-full h-full rounded-lg"></div>
            <div className="absolute top-0 left-0 h-full flex flex-col items-center justify-center px-8 ">
                <img className='w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full' src={testimonial.img} alt={testimonial.name} />
                <h1 className="font-bold text-[16px] md:text-2xl mb-1 text-center">
                    {testimonial?.name}
                </h1>
                <h3 className="text-[11px] md:text-sm mb-2 md:mb-3">
                    {testimonial.profession}
                </h3>
                <div>
                    <p className="text-center text-[10px] md:text-sm">{testimonial?.review}</p>
                </div>
                <div className="mt-4">
                    <Rating
                        name="text-feedback"
                        value={testimonial.rating}
                        readOnly
                        precision={0.1}
                        size="small"
                        emptyIcon={<StarIcon style={{ opacity: 1, color: "white" }} fontSize="inherit" />}
                    />

                </div>
            </div>
        </div>
    );
};

export default Testimonial;