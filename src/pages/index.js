import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import personAtComputer from "../images/person-at-computer.jpg"
import theft from "../images/theft.jpg"
import Layout from "../components/Layout"

const query = graphql`
  {
    contentfulHome {
      title
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  const {
    contentfulHome: { title },
  } = data
  return (
    <Layout>
      <h1>{title}</h1>
      <p>logo</p>
      <ul>
        <li>
          <strong>Option 1</strong> It's time to take control of the high risk
          vendor work being performed onsite Decrease property and employee
          liabilities, theft, and health risk
        </li>
        <li>
          <strong>Option 2</strong> Decrease Liability when High Risk Vendor
          Work is Performed Onsite It's your responsibility that property and
          employee liabilities, security, and health are protected at all times.
        </li>
      </ul>
      <p>See Your Exposures (click video) - scroll down and video is there</p>
      <hr />
      <p>How do we know these risks exist?</p>
      <p>
        The founders of VerndVeri owned and operated a high risk vendor service
        for 16 years. They know your liabilities firsthand. It�s time to protect
        your business!
      </p>
      <p>Picture of Bryan & Jason</p>
      <hr />
      <p>
        Certificates of Insurance have been supplied. However, are workers on
        the job really employed and covered by the High Risk Vendor?
      </p>
      <p>Bubble Graph (animation)</p>
      <p>
        Our quick audit will organize and identify the risk level before the job
        takes place. At a glance you will know the level of risk at each job
        before it takes place. Protect Your Liabilities Now (button)
      </p>
      <p>Have you checked to see if the certificate of insurance is real?</p>
      <p>What's needed to forge a certificate of insurance</p>
      <ul>
        <li>Acrobat Reader</li>
        <li>15 minutes of time</li>
      </ul>
      minutes of time Picture
      <img src={personAtComputer} alt="person at computer" />
      <p>COI- a fake Protect Your Liabilities Now (button) </p>
      <hr />
      <p>Protect your assets and make sure no theft takes place.</p>
      <p>
        Do you know the names of people on the job site? What if one of them
        steals something and the high risk vendor claims to have no knowledge of
        that person?
      </p>
      <img src={theft} alt="Picture of sneaking something into pocket" />
      <p>Picture of sneaking something into pocket</p>
      <p>
        You need to know who is on these job sites. Our quick audit will gather
        and supply all that information before the job starts.
      </p>
      <h2>Protect Your Liabilities Now (button)</h2>
      <hr />
      <p>
        Make sure you keep employee and tenants health in their best interest.
      </p>
      <p>
        A high risk job can have 5-40 new people on your premises at any given
        time. If contact tracing is necessary you want that information quickly
        for the protection of your people and others.
      </p>
      <p>
        <strong>Picture of person</strong> - Red - with lines to other people -
        something representing getting infected
      </p>
      <p>
        We will have all that information organized for you! This way you can
        show that due diligence was done in advance to protect the well being of
        all the people on the premises. Also if contact tracing is necessary it
        can be implemented quickly.
      </p>
      <p>Protect Your Liabilities Now (button) </p>
      <p>Learn More - Contact Lead Sheet</p>
      <h2>High Risk Vendors - Tab that is on top of website next to </h2>
      <h3>What makes a vendor high risk? </h3>
      -A vendor whose services include high level of labor, handling industrial
      equipment, and also moving heavy items.
      <p>
        Some High Risk Vendor Examples:(picture someone moving an item and it
        falling)
      </p>
      <ul>
        <li>Movers </li>
        <li>Junk Haulers</li>
        <li>Demolition</li>
        <li>Construction</li>
        <li>Painters</li>
        <li>Cleaners</li>
      </ul>
      <hr />
      <h3>How do these high risk vendors expose you? - click video </h3>
      <h3>How our services will protect you - Click to take to Service tab</h3>
      <h3>Common “Hiring” Traits Among High Risk Vendors</h3>
      <ul>
        <li>
          Many workers hired under the table for specific jobs (this avoids
          higher Workers Comp and Payroll Costs for the vendor)
        </li>
        <li>
          Little to no training when performing the work and following safety
          measures.
        </li>
        <li>Can lack proper protective gear on job site</li>
      </ul>
      <p>
        All of these traits create a higher risk situation for injury, theft,
        damage, and on site health traceability
      </p>
      <h3>
        How this translates on your job site - Click for video on home page
      </h3>
      <h3>How our services will protect you - Click to take to Service tab </h3>
      <hr />
      Common Traits of Under the table Workers more likely to be monetarily
      challenged. Have less to lose and more to gain seeking legal action Will
      seek legal action against multiple parties for an injury Can sometimes be
      more prone to theft This is not all, cases but many! Bottom line, it
      greatly increases your risks on all levels. How our services will protect
      you - Click to take to High Risk Protection Ready to Learn More - lLead
      Contact Sheet _________________________________________________________
      Subcontractors of High Risk Vendors little bit sticking out big ice berg
      underneath The high risk vendor supplied insurance. They now have full
      access to your property. picture of Iceberg Makes you wonder Do the
      subcontractors have insurance? Are you listed as an additional insured on
      their policy? Is the subcontractor listed as an additional insured on the
      vendors policy? How do you know if they are bringing on their own
      sub-contractors? Who is the subcontractor bringing onsite? How our
      services will protect you - Click to take to High Risk Protection Ready to
      Learn More - Lead Contact Sheet Third Tab- High Risk Protection Our
      service will decrease your liabilities immensely. It will also raise the
      bar for your High Risk Vendors. Your jobs will go smoother, safer, and
      quicker! Picture Bryan And Jason Co Founders & Managing Partners We have
      created this service to close huge liability gaps that we have personally
      witnessed working on 1000’s of job sites over the past 16 years Video
      Button showing liabilities What’s a HRV - takes to HRV tab Learn More
      (contact form button)
      _______________________________________________________________________
      Our Process is thorough but easy for all parties. Use process picture
      supplied by Bryan 5 Icon Pix Title of Each and bullets to be listed under
      each You Send us HRV Contact Information VendVeri Emails Quick Audit to
      HRV HRV Fill Out Quick Audit VendVeri Make sure Audit Complete Send Back
      to HRV is more info is needed Validate Insurance Review Risk Communicate
      Issues Color Code Risk - You Receive Complete Audit Color Coded to show
      high, medium, moderate, low risk ________________________________Learn
      More (contact form button)
      ________________________________________________________________________
      For a more indepth look at our protection services and rates call us at
      1-800-Get-Safe or fill out the form below! A representative will be in
      touch shortly. Contact Form Fields: First & Last Name Job Title Company
      Name Phone Number Email Custom Message
      __________________________________________________________________
      Industries Served - click drop down of industries Property Managers
      Schools & Universities Government Corporate America
      -------------------------------------------------------------------------------------------------------------------------
      Property Managers With Many Tenants in a building come many vendors. It is
      easy for details to get overlooked. Easy to be too busy and let
      liabilities slip by! Tracking high risk vendors is a necessity in types of
      environments. Liability Video - button Contact form button
      ____________________________________________________________________________
      Schools and Universities Sprawling campuses, many buildings, multiple
      facilities departments managing vendors on jobs. There isn’t a better
      place to streamline the accountability of high risk vendors with our
      services. Liability Video - button Contact form button
      ____________________________________________________________________________
      Government Entities The government has a big responsibility to set the
      guidelines for High Risk work being performed onsite. Without Vendveri
      services there are gaping holes of liability existing on job sites. Our
      services will fill those gaps. It will let vendors know that you demand a
      safe and organized environment at all times.
      _____________________________________________________________ Corporate
      America While they do not have as many High Risk jobs onsite they are by
      the least educated on the liabilities that exist. Vendveri is going to
      bring a new level of accountability and safety. It will protect the
      integrity of your business, employee health and safety. Liability Video -
      button Contact form button
    </Layout>
  )
}

export default IndexPage
