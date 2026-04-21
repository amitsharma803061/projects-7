import React from 'react';

const TicketItems = ({ticket, handleResolved}) => {
   
    return (
        <div className="bg-[#FFFFFF] w-110 md:w-110 h-30 p-3 rounded-xl space-y-2">
            <h2 className="text-xl font-semibold ml-3">{ticket.title}</h2>
            <button onClick={() => handleResolved(ticket)} className="btn w-100 h-10 bg-[#0dbe25] text-xl text-white rounded-xl ml-3 mt-2">Complete</button>
        </div>

    );
};

export default TicketItems;