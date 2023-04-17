import React, { FC, useState } from "react";
import Collapsable from "./Collapsable";

const Commitment: FC = () => {
  const [active, setActive] = useState<string | null>(null);
	return (
		<section id="commitment" className="overflow-hidden gradient form-shadow">
			<div className="poppins text-center sm:text-start font-light flex flex-col justify-center text-indigo-600 !pt-8 !pb-10 md:!py-16 section-container">
        <h2 className="text-3xl font-medium text-indigo-600 commitment-shadow">Our Commitment</h2>
        <Collapsable title="Fully Insured" active={active} setActive={setActive}>
					<p>We are committed to providing our
					clients with exceptional service that is rooted in trust and quality
					workmanship. As a fully insured company, you can rest assured that
					your property is in safe hands when you choose us.</p>
        </Collapsable>
        <Collapsable title="Meticulous Attention to Detail" active={active} setActive={setActive}>
					<p>We take pride in the meticulous attention to detail that we
					bring to every project. We understand that the smallest details can
					make a significant difference in the overall result of a project and
					will work tirelessly to ensure that every project meets our high
					standards.</p>
        </Collapsable>
        <Collapsable title="Free Written Estimates" active={active} setActive={setActive}>
          <p>
            We aim to provide transparency and instill confidence in our services
            by offering free written estimates. This service allows you to
            understand the scope of the project and make an informed decision
            before we begin work.
          </p>
        </Collapsable>
        <Collapsable title="Clean and Tidy Work Environment" active={active} setActive={setActive}>
          <p>
            We are dedicated to ensuring that your home remains clean and
            tidy throughout the project. We take great care to{" "}
            clean up after ourselves at the end of each day, leaving your
            home as we found it.
          </p>
        </Collapsable>
        <Collapsable title="Timely Completion" active={active} setActive={setActive}>
          <p>
            We understand the importance of keeping our time
            commitment. We value your time and strive to complete every project
            within the agreed-upon timeframe. If there are any changes or delays,
            we communicate with you promptly to keep you informed.
          </p>
        </Collapsable>
			</div>
		</section>
	);
};

export default Commitment;
