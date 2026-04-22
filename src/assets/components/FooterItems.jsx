import React from 'react';

const FooterItems = () => {
    return (
        <div className="w-full h-260 bg-[#030000] md:h-100">

            <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-5 space-y-5 text-white">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">CS — Ticket System</h2>
                    <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="space-y-3 md:ml-20">
                    <h2 className="text-2xl font-semibold">Company</h2>
                    <ol className="space-y-3 text-gray-500">
                        <ol>About Us</ol>
                        <ol>Our Mission</ol>
                        <ol>Contact Saled</ol>
                    </ol>
                </div>
                <div className="space-y-3 md:ml-10">
                    <h2 className="text-2xl font-semibold">Service</h2>
                    <ol className="space-y-3 text-gray-500">
                        <ol>Products & Service</ol>
                        <ol>Customer Stories</ol>
                        <ol>Download Apps</ol>
                    </ol>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Information</h2>
                    <ol className="space-y-3 text-gray-500">
                        <ol>Privacy Policy</ol>
                        <ol>Terms & Condition</ol>
                        <ol>Join Us</ol>
                    </ol>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Social Links</h2>
                    <ol className="space-y-3 text-gray-500">
                        <ol className="flex gap-2"><img src="/public/group_x.png" alt="" />@CS -- Ticket System</ol>
                        <ol className="flex gap-2"><img src="/public/group_im.png" alt="" />@CS -- Ticket System</ol>
                        <ol className="flex gap-2"><img src="/public/group_f.png" alt="" />@CS -- Ticket System</ol>
                        <ol className="flex gap-2"><img src="/public/Group_m.png" alt="" />support@cst.com</ol>
                    </ol>
                </div>
            </div>

            <div className="text-center mt-10 border-t border-gray-600 w-full my-4">
                <h2 className="text-gray-400 pt-5">© 2025 CS — Ticket System. All rights reserved.</h2>
            </div>

        </div>
    );
};

export default FooterItems;