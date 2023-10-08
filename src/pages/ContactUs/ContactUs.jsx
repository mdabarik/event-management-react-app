import React from 'react';
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <div>
                <ContactUsBanner></ContactUsBanner>
            </div>
            <div>
                <div className="mt-[95vh] w-[100vw]">
                    <Footer></Footer>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;