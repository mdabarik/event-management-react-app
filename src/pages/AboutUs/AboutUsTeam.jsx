import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Swal from 'sweetalert2';

const AboutUsTeam = ({ member }) => {

    const handleClickCTA1 = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks for contacting.',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="text-white h-[350px] flex flex-col items-center justify-center rounded-lg relative">
            <img className="w-full h-[350px] object-cover rounded-lg" src={member?.image} alt="img" />
            <div className="absolute top-0 left-0 bg-[#00000090] w-full h-full rounded-lg"></div>
            <div className="absolute top-0 left-0 h-full flex flex-col items-center justify-center px-8 ">
                <img className='w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full' src={member.image} alt={member.name} />
                <h1 className="font-bold text-[16px] md:text-2xl mb-1 text-center">
                    {member?.name}
                </h1>
                <h3 className="text-[11px] md:text-sm mb-2 md:mb-3">
                    {member.profession}
                </h3>
                <div>
                    <p className="text-center text-[10px] md:text-sm">{member.short_biography}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsTeam;