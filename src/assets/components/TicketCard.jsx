import { Calendar } from 'lucide-react';
import React from 'react';

const TicketCard = ({ticket, handleTicket}) => {



    return (
        <div onClick={() => handleTicket(ticket)} className=" bg-[#FFFFFF] w-110 md:w-150 h-50 rounded-xl space-y-3">
            <div className="flex justify-between items-center mt-4">
                <h2 className="font-medium text-xl ml-3">{ticket.title}</h2>
                <button className="btn bg-[#B9F8CF] rounded-4xl font-medium text-xl mr-3">{ticket.status}</button>
            </div>
            <p className="text-gray-500 ml-3">{ticket.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex font-medium gap-4 ml-3">
                    <h2>{ticket.id}</h2>
                    <p className="text-red-500">{ticket.priority}</p>
                </div>
                <div className="flex font-medium gap-4 mr-3">
                    <h2>{ticket.customer}</h2>
                    <p className="flex items-center gap-2"><Calendar />{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;