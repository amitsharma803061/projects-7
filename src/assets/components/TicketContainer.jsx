import React, { use, useState } from 'react';
import Banner from './CodeFile/Banner';
import TicketCard from './TicketCard';
import TicketItems from './TicketItems';
import { Check } from 'lucide-react';
import ResolvedCard from './ResolvedCard';
import { toast } from 'react-toastify';

const TicketContainer = ({ promise }) => {
    const data = use(promise)
    // console.log(ticket);
    const [tickets, setTickets] = useState(data);

    const [ticketItems, setTicketItems] = useState([]);

    const [taskItems, setTaskItems] = useState([]);


    const handleTicket = (ticket) => {
        
        // Age check koro tarpor ticket dekhao jeno akta card 2 bar na jete pare
        const isExist = ticketItems.find((item) => item.id == ticket.id);
        if (isExist) {
            toast.success("In-progress success")
            return;
        }

        // ticket items ke click kore ticket ke tusk a dhukabo
        const newTicketItems = [...ticketItems, ticket];
        setTicketItems(newTicketItems);
    };


    const handleResolved = (ticket) => {
        toast.success("Resolved Complete")

        // ticket items ke click kore ticket ke tusk a dhukabo
        const newTaskItems = [...taskItems, ticket];
        setTaskItems(newTaskItems);

        // Complete card ke sorai dibo
        const remaining = ticketItems.filter((item) => item.id !== ticket.id);
        setTicketItems(remaining);

        // in-progress theke card gula ke remove kore deo jkhn complete button a chap porbe
        const newRemaining = tickets.filter((item) => item.id !== ticket.id);
        setTickets(newRemaining);
    };


    return (
        <div>
            <Banner taskItems={taskItems} totalTicket={ticketItems}></Banner>



            {/* this is a function card ..... */}
            <section className="w-full min-h-screen bg-gray-200 py-5">
                <h2 className="text-4xl font-bold ml-20">Customer Tickets</h2>
                <div className="w-11/12 mx-auto py-4 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-2">
                    <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">

                        {
                            tickets.map((ticket) => (<TicketCard handleTicket={handleTicket} key={ticket.id} ticket={ticket}></TicketCard>))
                        }
                    </div>
                    <div className="md:col-span-3 ">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold">Task Status</h2>
                            {
                                ticketItems.map((ticket) => <TicketItems handleResolved={handleResolved} key={ticket.id} ticket={ticket}></TicketItems>)
                            }
                        </div>
                        <div className="space-y-5 mt-3">
                            <h2 className="text-3xl font-semibold">Resolved Task</h2>
                            {
                                taskItems.map((ticket) => <ResolvedCard key={ticket.id} ticket={ticket}></ResolvedCard>)
                            }
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TicketContainer;