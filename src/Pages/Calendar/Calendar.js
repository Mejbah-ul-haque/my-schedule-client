import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
	const [date, setDate] = useState(new Date());
	return (
		<div className="">
			<div className="container mx-auto d-flex justify-content-center align-items-center">
				<div className=" row my-5">
					<div className="col ">
						<div class="card ">
							<div class="card-body">
								<DayPicker mode="single" selected={date} onSelect={setDate} />
								<p className="text-center fw-bold">
									Selected Date is {format(date, "PP")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
