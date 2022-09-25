import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Paper.css";

const Paper = () => {
	return (
		<div className="mt-5">
      <div>
        <h6 className="text-center text-secondary  fs-5 my-5"><span className="border rounded-pill px-5 py-3">Today's Media</span> </h6>
      </div>
			<Table bordered>
				<tbody className=" text-center text-light">
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.theguardian.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								The Guardian
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.bbc.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								BBC
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.nytimes.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								New York Times
							</a>
						</td>
						
					</tr>
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.thedailystar.net/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								The Daily Star
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.daily-sun.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								Daily Sun
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.dhakatribune.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								Dhaka Tribune
							</a>
						</td>
						
					</tr>
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.dw.com/en/top-stories/s-9097"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								Deutsche welle
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://edition.cnn.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								CNN
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.aljazeera.com/"
								target="_blank"
								className="text-decoration-none text-light paper_text_color_text"
							>
								aljazeera
							</a>
						</td>
						
					</tr>
					
				</tbody>
			</Table>

			<div className="my-5">
        <a href="https://www.bd-pratidin.com/" target="_blank"><Button variant="outline-secondary text-success" className="m-3"><span className="text-danger">বাংলাদেশ</span> প্রতিদিন</Button></a>
          <a href="https://www.prothomalo.com/" target="_blank"><Button variant="outline-secondary" className="m-3">প্রথম আলো</Button></a>
          
          <a href="https://www.kalerkantho.com/" target="_blank"><Button variant="outline-secondary" className="m-3">কালের কণ্ঠ</Button></a>
          <a href="https://samakal.com/" target="_blank"><Button variant="outline-secondary" className="m-3">সমকাল</Button></a>
          <a href="https://www.jugantor.com/" target="_blank"><Button variant="outline-secondary" className="m-3">যুগান্তর</Button></a>
          <a href="https://www.deshrupantor.com/" target="_blank"><Button variant="outline-secondary" className="m-3">দেশ রূপান্তর</Button></a>
          <a href="https://www.ittefaq.com.bd/" target="_blank"><Button variant="outline-secondary" className="m-3">ইত্তেফাক</Button></a>
          <a href="https://www.anandabazar.com/" target="_blank"><Button variant="outline-secondary" className="m-3">আনন্দবাজার</Button></a>
        
			</div>
		</div>
	);
};

export default Paper;
