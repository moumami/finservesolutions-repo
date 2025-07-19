import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dearest Subtle Pheasant</title>
        <meta property="og:title" content="Dearest Subtle Pheasant" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for any inquiries or collaborations.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">About Us</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact Us</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Our Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Learn more about FinServeSolutions and our mission.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore the range of services we offer to our clients.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Our Projects</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover the projects we have successfully completed.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">24/7 Customer Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Dedicated Support</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Fast and Reliable Services</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Secure Payments</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Ensuring safe and secure transactions for all clients.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Efficient Solutions</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to revolutionize your financial services?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to learn more about how FinServeSolutions can
              help your business thrive.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Tailored financial solutions to meet your specific requirements.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Our platform ensures secure transactions for all your financial
              needs.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">24/7 Customer Support</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Secure Transactions</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              We provide round-the-clock customer support to assist you anytime,
              anywhere.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Customized Solutions</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$49/mo</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature text goes here</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$29/mo</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$20/mo</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Explore our innovative solutions and discover how we can help your
              business grow.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Our team will work closely with you to implement the solutions
              seamlessly into your workflow.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Customize</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Tailor our services to fit your specific needs and requirements
              for maximum efficiency.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Discover</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Implement</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Continuously optimize and improve your systems with our ongoing
              support and expertise.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Optimize</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">CTO, Software Inc.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Tech Co.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              We are extremely satisfied with the services provided by
              FinServeSolutions. They have exceeded our expectations in every
              way.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">CFO, Finance Co.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Williams</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              See what our clients have to say about us.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">COO, Data Corp.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              FinServeSolutions has been instrumental in helping us streamline
              our processes and improve efficiency. Their team is highly skilled
              and professional.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Working with FinServeSolutions has been a game-changer for our
              business. Their innovative solutions have helped us stay ahead of
              the competition.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              We couldn&apos;t be happier with the results delivered by
              FinServeSolutions. Their dedication to client satisfaction is
              truly commendable.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Get in touch with us for any inquiries or project collaborations.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Tech Street, Suite 101, New York, NY 10001
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Innovation Avenue, San Francisco, CA 94105
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">San Francisco Office</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Projects</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
