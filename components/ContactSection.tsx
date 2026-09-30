import React from 'react';

export default function ContactSection() {
  const CLIENT_LOGOS = [
    {
      name: 'Samui Luxury Boats',
      svg: <div className="flex items-center gap-2 justify-center w-full h-full"><img src="/images/samui-logo.png" alt="Samui Logo" className="h-6 w-auto object-contain" /><span className="font-bold text-xs whitespace-nowrap">Samui Luxury Boats</span></div>
    },
    {
      name: 'MBC',
      svg: <div className="flex items-center justify-center w-full h-full"><img src="/images/mbc-logo.png" alt="MBC" className="h-8 w-auto object-contain" /></div>
    },
    {
      name: 'Kindred Mortgage Group',
      svg: <div className="flex items-center justify-center w-full h-full"><img src="/images/kindred-logo.png" alt="Kindred" className="h-7 w-auto object-contain" /></div>
    },
    {
      name: 'LandDesign',
      svg: <div className="flex items-center justify-center w-full h-full"><img src="/images/landdesign-logo.png" alt="LandDesign" className="h-8 w-auto object-contain" /></div>
    },
    {
      name: 'Lake Effect',
      svg: <div className="flex items-center justify-center w-full h-full"><img src="/images/lake-effect-logo.png" alt="Furniture and Mattress" className="h-8 w-auto object-contain" /></div>
    },
    {
      name: '2U',
      svg: <div className="flex items-center justify-center w-full h-full"><img src="/images/two-u-logo.png" alt="CARION" className="h-7 w-auto object-contain" /></div>
    }
  ];

  return (
    <section className="w-full bg-[#f4f7f9] !py-0 !px-6 lg:!px-[50px] min-[2500px]:!px-[590px] lg:h-[calc(100vh-80px)] flex flex-col">
      <div className="w-full mx-auto my-auto flex flex-col lg:flex-row gap-10 lg:gap-8 items-stretch">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between pb-2">
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 xl:mb-8 tracking-tight leading-tight max-w-lg">
              From Introduction <br/> to Proposal in Days
            </h2>
            
            <div className="flex flex-col gap-5 xl:gap-6">
              <div>
                <h3 className="text-[#0d6efd] font-bold text-lg xl:text-xl mb-1">Discovery Call</h3>
                <p className="text-gray-800 text-sm xl:text-base leading-snug">Our sales team reviews your message and asks for a discovery call to gather more information.</p>
              </div>
              <div>
                <h3 className="text-[#0d6efd] font-bold text-lg xl:text-xl mb-1">Expert Input</h3>
                <p className="text-gray-800 text-sm xl:text-base leading-snug">Our veterans go through your requirements to provide their take, backed by decades of experience.</p>
              </div>
              <div>
                <h3 className="text-[#0d6efd] font-bold text-lg xl:text-xl mb-1">Proposal</h3>
                <p className="text-gray-800 text-sm xl:text-base leading-snug">We provide a proposal specific to what you're building, for you to review at your own pace.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 xl:mt-12">
            <p className="text-xs xl:text-sm text-gray-700 mb-4 font-medium">Trusted by top platforms for our transformative solutions and exceptional results:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CLIENT_LOGOS.map((logo, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-md h-[55px] xl:h-[65px] flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>

                {/* Right Column - Form */}
        <div className="w-full lg:w-[48%] xl:w-[45%] min-[2500px]:w-[40%] flex flex-col justify-center">
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 lg:p-10 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-8">
              How Can We Help <span className="text-[#0d6efd]">You Build?</span>
            </h3>
            
            <form className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <input type="text" placeholder="Full name *" className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd]" />
                <input type="email" placeholder="Work email *" className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd]" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex border border-gray-300 rounded-md overflow-hidden focus-within:border-[#0d6efd] focus-within:ring-1 focus-within:ring-[#0d6efd]">
                  <div className="bg-gray-50 border-r border-gray-300 px-3 py-3 text-sm text-gray-600 flex items-center">
                    <span className="mr-1">PK</span> +92
                  </div>
                  <input type="tel" placeholder="Phone number *" className="flex-1 px-4 py-3 text-sm focus:outline-none" />
                </div>
                <select className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd] bg-white" defaultValue="">
                  <option value="" disabled hidden>Select a service *</option>
                  <optgroup label="Development & QA">
                    <option value="ux_product_design">UX, Product and Design</option>
                    <option value="backend_development">Backend Development Services</option>
                    <option value="frontend_development">Frontend Development Services</option>
                    <option value="custom_software">Custom Software Development</option>
                    <option value="qa_software_testing">QA and Software Testing</option>
                    <option value="saas_development">SAAS Development Services</option>
                    <option value="mvp_startups">MVP for Startups</option>
                    <option value="prototype_mvp">Prototype to MVP</option>
                    <option value="software_consulting">Software Consulting Services</option>
                    <option value="salesforce_consulting">Salesforce Consulting</option>
                    <option value="enterprise_software">Enterprise Software Development</option>
                    <option value="web_scraping">Web Scraping Services</option>
                    <option value="poc_development">PoC Development</option>
                    <option value="odoo_erp">Odoo ERP Solutions</option>
                    <option value="databricks">Databricks Services</option>
                    <option value="accessibility">Accessibility Services</option>
                  </optgroup>
                  <optgroup label="Engagement Models">
                    <option value="team_augmentation">Team Augmentation</option>
                    <option value="dedicated_teams">Dedicated Teams</option>
                    <option value="project_outsourcing">Project Outsourcing</option>
                  </optgroup>
                  <optgroup label="IT Operations">
                    <option value="devops">DevOps Solutions</option>
                    <option value="infrastructure">Infrastructure Design</option>
                    <option value="cyber_security">Cyber Security</option>
                    <option value="technical_support">Technical Support</option>
                  </optgroup>
                  <optgroup label="Mobility & Apps">
                    <option value="android_app">Android App Development</option>
                    <option value="ios_app">iOS App Development</option>
                    <option value="web_app">Web App Development</option>
                    <option value="mobile_app">Mobile App Development</option>
                  </optgroup>
                </select>
              </div>

              <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd] bg-white" defaultValue="">
                  <option value="" disabled hidden>What is your budget? *</option>
                  <option value="1">Less than USD 50,000</option>
                  <option value="2">USD 50,000 - USD 100,000</option>
                  <option value="3">USD 100,000 - USD 200,000</option>
                  <option value="4">USD 200,000 - USD 500,000</option>
                  <option value="5">Above USD 500,000</option>
              </select>

              <textarea rows={4} placeholder="Tell us about your project *" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd] resize-none"></textarea>

              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="nda" className="w-4 h-4 rounded border-gray-300 text-[#0d6efd] focus:ring-[#0d6efd]" />
                <label htmlFor="nda" className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer">
                  Request NDA
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </label>
              </div>

              <button type="button" className="w-full bg-[#0d6efd] hover:bg-blue-700 text-white font-bold py-4 rounded-md transition-colors mt-2">
                Book a Free Discovery Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
