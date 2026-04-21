import { Check } from 'lucide-react';
import React from 'react';

const ResolvedCard = ({ticket}) => {
    return (
        <div className="bg-[#e2f8e1] w-110 md:w-110 h-20 p-2 rounded-xl space-y-1">
            <h2 className="text-xl font-semibold ml-3">{ticket.title}</h2>
            <div className="flex justify-between items-center ml-3">
                <h2 className="flex items-center gap-2 text-emerald-500"><Check />Complete</h2>
                <h2>Click to complete</h2>
            </div>
        </div>
    );
};

export default ResolvedCard;