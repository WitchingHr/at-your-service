import React, { FC } from "react";
import Collapsable from "./Collapsable";

const FAQ: FC = () => {
	return (
		<section id="faq" className="overflow-hidden gradient form-shadow">
			<div className="poppins font-extralight flex flex-col justify-center text-indigo-600 !pt-8 !pb-10 md:!py-16 section-container">
        <Collapsable title="Fully Insured">
					<p>At AT Your Service, we are committed to providing our
					clients with exceptional service that is rooted in trust and quality
					workmanship. As a <b>fully insured</b> company, you can rest assured that
					your property is in safe hands when you choose us.</p>
        </Collapsable>
        <Collapsable title="Meticulous Attention to Detail">
					<p>We take pride in the <b>meticulous attention to detail</b> that we
					bring to every project. We understand that the smallest details can
					make a significant difference in the overall result of a project and
					will work tirelessly to ensure that every project meets our high
					standards.</p>
        </Collapsable>
        <Collapsable title="Free Written Estimates">
          <p>
            We aim to provide transparency and instill confidence in our services
            by offering <b>free written estimates</b>. This service allows you to
            understand the scope of the project and make an informed decision
            before we begin work.
          </p>
        </Collapsable>
        <Collapsable title="Clean and Tidy Work Environment">
          <p>
            We are dedicated to ensuring that your home remains clean and
            tidy throughout the project. We take great care to{" "}
            <b>clean up after ourselves at the end of each day</b>, leaving your
            home as we found it.
          </p>
        </Collapsable>
        <Collapsable title="Timely Completion">
          <p>
            Lastly, we understand the importance of keeping our time
            commitment. We value your time and strive to <b>complete every project
            within the agreed-upon timeframe</b>. If there are any changes or delays,
            we communicate with you promptly to keep you informed.
          </p>
        </Collapsable>
			</div>
		</section>
	);
};

export default FAQ;
