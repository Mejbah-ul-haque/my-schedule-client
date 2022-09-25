import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const [date, setDate]= useState(new Date());
	return (
		<div className="min-h-screen">
      <div className=" flex justify-center mt-10">
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
          />
          <p className="text-center font-bold">Selected Date is {format(date, 'PP')}</p>
				</div>
			</div>
		</div>
    </div>
	);
};

export default Calendar;
