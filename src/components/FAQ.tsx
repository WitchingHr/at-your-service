import React, { FC } from "react";

const FAQ: FC = () => {
	return (
		<section id="faq" className="overflow-hidden gradient form-shadow">
			<div className="poppins font-extralight flex flex-col justify-center gap-6 text-indigo-600 !pt-8 !pb-10 md:!py-16 section-container">
				<p>
					At AT Your Service, we are committed to providing our
					clients with exceptional service that is rooted in trust and quality
					workmanship. As a <b>fully insured</b> company, you can rest assured that
					your property is in safe hands when you choose us.
				</p>
				<p>
					We take pride in the meticulous <b>attention to detail</b> that we
					bring to every project. We understand that the smallest details can
					make a significant difference in the overall result of a project and
					will work tirelessly to ensure that every project meets our high
					standards.
				</p>
				<p>
					We aim to provide transparency and instill confidence in our services
					by offering <b>free written estimates</b>. This service allows you to
					understand the scope of the project and make an informed decision
					before we begin work.
				</p>
				<p>
					Our team is dedicated to ensuring that your home remains clean and
					tidy throughout the project. We take great care to{" "}
					<b>clean up after ourselves at the end of each day</b>, leaving your
					home as we found it.
				</p>
				<p>
					Lastly, we understand the importance of keeping our time
					commitment. We value your time and strive to <b>complete every project
					within the agreed-upon timeframe</b>. If there are any changes or delays,
					we communicate with you promptly to keep you informed.
				</p>
			</div>
		</section>
	);
};

export default FAQ;
