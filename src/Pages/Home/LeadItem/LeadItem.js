import React from "react";
import { Link } from "react-router-dom";
import mejbah from "../../../Images/About/mejbah.png";
import background from "../../../Images/Resume/vc.png";
import "./LeadItem.css";

const LeadItem = () => {
    
    const myStyle ={
        backgroundImage:`url(${background})`,
        
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '.7'
    }
	return (
		<div className="container">
			<div className="row my-5">
				<div  className="col-sm-12 col-md-12 col-lg-12 mx-auto mt-2 mb-5">
					<div style={{backgroundColor: '#fff'}} className="card border-0 lead-card">
						<div  className="row g-0">
							<div className="col-md-6 col-lg-7 d-flex align-items-center">
								<div id="text-body" className="card-body text-body">
									<h4 className="hello-heading">Hello</h4>
									<h2 className="fw-bold lead-heading">I Am Mejbah</h2>
									<h5 className="designation-text my-4">Full Stack Web Developer</h5>
									<p className="text-secondary lh-base head-text-body">
										Not just profession! Web Development is my passion. My love.
										I work with JavaScript, ReactJS, NodeJS, HTML5, CSS3 and so
										on.
									</p>
									<Link to="/contact"><button className="btn btn-success rounded-pill px-5 py-2 mt-4 me-3 ">Hire Me</button></Link>
									<a target="_blank" href="https://drive.google.com/file/d/1oq2jd2nKfXv-MIqqvW7DeTMMyiACbzgG/view?usp=sharing"><button className="btn btn-outline-success rounded-pill px-4 py-2 mt-4">My Resume</button></a>
								</div>
							</div>
							<div style={myStyle} className="col-md-6 col-lg-5 rounded-circle">
								<img className="w-100" src={mejbah} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadItem;
