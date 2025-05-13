import React, {useState} from 'react';
const time_interval=30;
const formatTime= (date) => date.toTimeString().slice(0, 5);

const addMinutes= (time, minutes)=>{
    const [hour, minute]= time.split(":").map(Number);
    const date =new Date(0, 0, 0, hours, minute+minutes);
    return formatTime(date);
}

const getTimeSlots =(start, end)=>
{
    const slots=[];
    let current =start;
    while(current<end)
    {
        const next=addMinutes(current, time_interval);
        if(next<=end)
            slots.push(current);
        current=next;
    }
    return slots;
}

export default function App()
{
    const [startTime, setStartTime]=useState("");
    const [endTime, setEndTime]=useState("");
    const [appoint, setAppoint]= useState([]);
    const [avail, setAvail]=useState([]);
    const [book, setBook]=useState([]);

    const handleSetWorkingHours=()=>{
        if(!startTime || !endTime)
            return ;

        const slots= getTimeSlots(startTime, endTime).filter(
            (slot)=> !appoint.includes(slot));

        setAvail(slots);
        setBook([...appoint]);
    };

    const handleAddAppointment=(slot) =>
    {
        if(!appoint.includes(slot))
        {
            const newApp=[...appoint, slot];
            setAppoint(newApp);
            const updatedSlots= avail.filter((s)=> s!== slot);
            setAvail(updatedSlots);
        }
    };

    const handleBookSlot = (slot) =>{
        if(!book.includes(slot))
        {
            setBook([...book, slot]);
            setAvail(avail.filter((s)=> s!== slot));
        }
    };
}