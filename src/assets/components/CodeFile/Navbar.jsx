import React from 'react';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#FFFFFF] shadow-sm p-5 w-12/12 mx-auto">
            <div>
                <h2 className="text-2xl font-bold">CS — Ticket System</h2>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-5">
                <div className="flex gap-5">
                    <ol>Home</ol>
                    <ol>FAQ</ol>
                    <ol>Changelog</ol>
                    <ol>Blog</ol>
                    <ol>Download</ol>
                    <ol className="">Contact</ol>
                </div>
                <div>
                    <button className="btn text-xl bg-[rgb(129,51,255)]"><span>+</span> New Ticket</button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;