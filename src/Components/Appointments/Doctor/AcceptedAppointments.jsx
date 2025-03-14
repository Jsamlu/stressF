import React from 'react'

function AcceptedAppointments() {
  const Appointmentlist = [
    {
      id:"",
      name:"Arpita",
      date:"08-02-2025",
      time:"08:48 AM"
    },
    {
      id:"",
      name:"Jayesh",
      date:"08-02-2025",
      time:"08:48 AM"
    },
    {
      id:"",
      name:"Jasmine",
      date:"08-02-2025",
      time:"08:48 AM"
    },
  ]
    
  return (
    <div className='h-full'>
      <div>
        {Appointmentlist.map((ap) => {
          return(
            <div className='w-[75%] my-1  text-sky-900 hover:text-white transition-all duration-150 hover:bg-blue-500 bg-white h-[60px] rounded-xl flex justify-between items-center py-2 px-5 hover:scale-[.92] scale-90'>
              <div>
                <p className='font-semibold'>{ap.name}</p>
              </div>
              <div>
                <p>{ap.date} | {ap.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AcceptedAppointments