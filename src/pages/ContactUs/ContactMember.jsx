import Swal from 'sweetalert2';

const ContactMember = ({ member }) => {

    const handleClickCTA3 = () => {
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
                <button onClick={handleClickCTA3} className='mt-6 block w-full select-none rounded-lg bg-[#db332a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white'>Contact</button>
            </div>
        </div>
    );
};

export default ContactMember;