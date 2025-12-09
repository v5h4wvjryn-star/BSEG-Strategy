import React, { useState } from 'react';

function App() {
  const [showBSHIModal, setShowBSHIModal] = useState(false);
  const [showFinCoModal, setShowFinCoModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-star-700">⭐ Blue Star Equity Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-star-600 transition">About</a>
              <a href="#divisions" className="text-gray-700 hover:text-blue-star-600 transition">Divisions</a>
              <a href="#strategy" className="text-gray-700 hover:text-blue-star-600 transition">Strategy</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-star-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Building a Modern <span className="text-blue-star-600">Wealth Engine</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Through Insurance, Real Estate, Lending, and Trust Structures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#divisions" className="bg-blue-star-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-star-700 transition shadow-lg">
              Explore Our Divisions
            </a>
            <a href="#strategy" className="bg-white text-blue-star-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-star-600">
              View Strategy
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">Who We Are</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-blue-star-600 font-semibold mb-4">
              The Holding Company That Powers the Ecosystem
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Blue Star Equity Group is the parent company that oversees, manages, and strategically coordinates a comprehensive ecosystem of financial businesses designed for long-term wealth creation.
            </p>

            <div className="bg-blue-star-50 p-8 rounded-xl my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus Areas:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Strategic capital allocation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Business development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Risk management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Long-term wealth creation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Operational excellence</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-star-600 mr-3 text-xl">✓</span>
                  <span>Strategic partnerships</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Leadership</h3>
              <p className="mb-4">BSEG is owned and led by two Managing Partners, working side by side:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-xl text-blue-star-700 mb-2">Howard Reid</h4>
                  <p className="text-gray-600">Strategy, Finance, Systems, Governance</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-xl text-blue-star-700 mb-2">Daron ______</h4>
                  <p className="text-gray-600">Sales, Partnerships, Insurance, Client Acquisition</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600 italic">
                For the first 5 years, BSEG will be operated solely by these two partners, with hiring done only when required or when preparing for retirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Divisions */}
      <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-star-950 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Highlighted <span className="text-blue-star-400">Pillars</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">The Five Divisions of Blue Star Equity Group</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Division 1 - BSHI */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-star-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star Heritage Insurance (BSHI)</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Texas-based independent insurance agency serving families, businesses, real estate investors, and municipal entities. Specializing in personal lines, commercial coverage, landlord policies, and government/public sector insurance programs.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setShowBSHIModal(true)}
                  className="w-full text-blue-star-400 hover:text-blue-star-300 font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Read Full Business Plan
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href="#"
                  className="w-full text-gray-400 hover:text-white font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Visit Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Division 2 - Property Holdings */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-star-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star Property Holdings</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Real estate investment division focused on BRRRR rentals, long-term holds, fix-and-flip partnerships, and distressed property acquisition. Building long-term equity with tax advantages while creating collateral for FinCo lending operations.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="w-full text-blue-star-400 hover:text-blue-star-300 font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  View Portfolio
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full text-gray-400 hover:text-white font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Visit Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Division 3 - FinCo */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-star-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star FinCo</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Private lending division offering hard-money loans (12-14% + points), bridge financing, flip funding, and construction draws. Launches Year 3-4 when BSHI cash flow supports responsible expansion. Double revenue model: earn interest + insurance commissions.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setShowFinCoModal(true)}
                  className="w-full text-blue-star-400 hover:text-blue-star-300 font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Read Full Business Plan
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href="#"
                  className="w-full text-gray-400 hover:text-white font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Visit Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Division 4 - Property Management */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group lg:col-start-2">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-star-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star Property Management</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Property management services for Blue Star-owned rentals and external landlord clients. Offering tenant placement, maintenance coordination, rent collection, and owner reporting. Creates recurring revenue while controlling quality and expenses.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="w-full text-blue-star-400 hover:text-blue-star-300 font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  View Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full text-gray-400 hover:text-white font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Visit Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Division 5 - Pension Trust */}
            <div className="bg-gradient-to-br from-blue-star-600 to-blue-star-800 border border-blue-star-500 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-star-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star Pension Trust</h3>
                <p className="text-white text-opacity-90 leading-relaxed mb-6">
                  Generational wealth engine launching Years 5-7. Owns life insurance, accumulates cash value, holds real estate entities, and receives profit distributions. Provides legal asset protection, tax-advantaged growth, and ensures 50-year family wealth legacy.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="w-full text-white hover:text-blue-star-100 font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Learn About Trust Structure
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full text-white text-opacity-70 hover:text-white font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform"
                >
                  Visit Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wealth Flywheel */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-8">The Blue Star Wealth Flywheel</h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Each Division Strengthens the Next
          </p>

          <div className="bg-gradient-to-br from-blue-star-50 to-blue-star-100 p-12 rounded-2xl">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h3 className="font-bold text-xl text-blue-star-700">Insurance</h3>
                  <p className="text-sm text-gray-600">Cash flow foundation</p>
                </div>
                <div className="text-4xl text-blue-star-500">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h3 className="font-bold text-xl text-blue-star-700">Real Estate</h3>
                  <p className="text-sm text-gray-600">Equity & appreciation</p>
                </div>
                <div className="text-4xl text-blue-star-500">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h3 className="font-bold text-xl text-blue-star-700">Lending</h3>
                  <p className="text-sm text-gray-600">High cash returns</p>
                </div>
                <div className="text-4xl text-blue-star-500">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h3 className="font-bold text-xl text-blue-star-700">Property Management</h3>
                  <p className="text-sm text-gray-600">Recurring income</p>
                </div>
                <div className="text-4xl text-blue-star-500">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-blue-star-700 text-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-xl">Pension Trust</h3>
                  <p className="text-sm text-blue-star-100">Long-term wealth</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-4xl text-blue-star-500 mb-4">↻</div>
                <p className="text-gray-700 font-semibold">
                  Cross-sell • Referrals • Financing • Strategic Capital
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl text-gray-900 mb-4 text-center">How Each Division Strengthens the Next:</h4>
              <div className="space-y-3 text-gray-700">
                <p>→ Insurance gives cash flow to buy real estate</p>
                <p>→ Real estate increases lending opportunities</p>
                <p>→ Lending generates high cash returns</p>
                <p>→ Property Management creates recurring income</p>
                <p>→ The Pension Trust locks in long-term wealth</p>
              </div>
              <p className="mt-6 text-center font-bold text-blue-star-700 text-lg">
                This system compounds like a large private equity firm, with far less overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Strategy */}
      <section id="strategy" className="section-container bg-gradient-to-b from-gray-50 to-white">
        <h2 className="section-title text-center mb-16">Our 10-Year Strategy</h2>

        {/* Years 1-5 */}
        <div className="mb-16">
          <div className="bg-blue-star-600 text-white py-4 px-8 rounded-t-xl">
            <h3 className="text-3xl font-bold">Years 1-5: Foundation & Growth</h3>
            <p className="text-blue-star-100 mt-2">Partner-Led, Lean, High-Profit</p>
          </div>
          <div className="bg-white shadow-xl rounded-b-xl p-8 space-y-8">
            {/* Years 1-2 */}
            <div className="border-l-4 border-blue-star-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Years 1-2: Build BSHI</h4>
              <div className="space-y-2 text-gray-700 mb-4">
                <p>→ Focus on recurring revenue</p>
                <p>→ Build referral partners (RE agents, flippers, landlords)</p>
                <p>→ Create strong monthly cash base</p>
                <p>→ No overhead — just the two partners</p>
                <p>→ Build website, CRM, quoting tools</p>
                <p>→ Underwrite profitable RE-friendly policies</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-800">Target by End of Year 2:</p>
                <p className="text-green-700 text-xl">$12K-$18K/month recurring revenue</p>
              </div>
            </div>

            {/* Years 2-3 */}
            <div className="border-l-4 border-blue-star-500 pl-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Years 2-3: Enter Real Estate</h4>
              <div className="space-y-2 text-gray-700 mb-4">
                <p>→ Buy first 1-2 rentals</p>
                <p>→ Participate in no-cash flip partnerships</p>
                <p>→ Write insurance + earn commissions</p>
                <p>→ Build rental underwriting systems</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-800">Target by End of Year 3:</p>
                <p className="text-green-700">RE equity: $150K-$300K</p>
                <p className="text-green-700">Cash flow: $1K-$3K/month</p>
              </div>
            </div>

            {/* Years 3-5 */}
            <div className="border-l-4 border-blue-star-600 pl-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Years 3-5: Launch FinCo</h4>
              <div className="space-y-2 text-gray-700 mb-4">
                <p>→ Start lending with $100-$250K of partner capital</p>
                <p>→ Offer 12-14% loans with 2-4 points</p>
                <p>→ Require BSHI coverage as lending condition</p>
                <p>→ Finance low-risk flips and rentals</p>
                <p>→ Build reputation as "Blue Star Lending Group"</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-800">Target by End of Year 5:</p>
                <p className="text-green-700">FinCo interest income: $75K-$140K/year</p>
                <p className="text-green-700">BSHI commissions from financed projects: $20K-$40K/year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Years 5-10 */}
        <div>
          <div className="bg-gradient-to-r from-blue-star-700 to-blue-star-900 text-white py-4 px-8 rounded-t-xl">
            <h3 className="text-3xl font-bold">Years 5-10: Expansion & Wealth Acceleration</h3>
            <p className="text-blue-star-100 mt-2">This is Where Life Changes</p>
          </div>
          <div className="bg-white shadow-xl rounded-b-xl p-8 space-y-8">
            {/* Years 5-7 */}
            <div className="border-l-4 border-blue-star-700 pl-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Years 5-7: Build the Pension Trust</h4>
              <div className="space-y-2 text-gray-700">
                <p>→ Move long-term assets into the trust</p>
                <p>→ Begin placing life policies</p>
                <p>→ Own portions of RE entities</p>
                <p>→ Create tax-advantaged long-term passive income</p>
              </div>
            </div>

            {/* Years 6-10 */}
            <div className="border-l-4 border-blue-star-700 pl-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Years 6-10: Scale Everything</h4>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>→ Acquire additional properties</p>
                <p>→ Expand lending operations</p>
                <p>→ Increase cash flow across all divisions</p>
                <p>→ Achieve true financial independence</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
                <p className="font-bold text-green-900 text-xl mb-4">Projected Outcome by Year 10:</p>
                <div className="grid md:grid-cols-2 gap-4 text-green-800">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    <span>Real estate equity: <strong>$2-$5M</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    <span>FinCo lending fund: <strong>$1M-$2M</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    <span>BSHI income: <strong>$150K-$300K/year</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    <span>Passive income: <strong>$150K+/year</strong></span>
                  </div>
                </div>
                <p className="mt-6 text-center text-xl font-bold text-green-900">
                  True financial independence for both partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="section-container bg-blue-star-600 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Why This Strategy Works</h2>
          <p className="text-center text-xl text-blue-star-100 mb-12">The Economics Behind the Engine</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">✓ Insurance = Predictable Cash Flow</h3>
              <div className="space-y-2 text-blue-star-50">
                <p>→ Renewals = recurring income</p>
                <p>→ Recurring income = stability</p>
                <p>→ Stability = ability to invest</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">✓ Real Estate = Equity & Tax Advantages</h3>
              <div className="space-y-2 text-blue-star-50">
                <p>→ Equity compounds</p>
                <p>→ Appreciation compounds</p>
                <p>→ Depreciation reduces taxes</p>
                <p>→ Long-term holds = wealth</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">✓ Lending = High Short-Term Profit</h3>
              <div className="space-y-2 text-blue-star-50">
                <p>→ 12-14% interest rates</p>
                <p>→ 2-4 points upfront</p>
                <p>→ BSHI commissions</p>
                <p>→ Property as collateral</p>
                <p className="font-bold pt-2">One of America's most profitable businesses</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">✓ Property Management = Recurring Income</h3>
              <div className="space-y-2 text-blue-star-50">
                <p>→ Recurring income multiplies everything</p>
                <p>→ Client retention increases</p>
                <p>→ Control over quality</p>
                <p>→ Minimal overhead</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center text-blue-star-700">✓ The Pension Trust Secures Everything</h3>
            <p className="text-xl text-center text-gray-700">
              You lock in wealth for <span className="font-bold text-blue-star-600">50 years</span>.<br />
              Not 5 years. Not 10 years. <span className="font-bold text-blue-star-600">Fifty.</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Statement */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-star-50 to-white border-2 border-blue-star-200 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Blue Star Equity Group</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Blue Star Equity Group is a modern private equity platform built for the next generation of wealth creators. Instead of relying on Wall Street, we combine insurance, real estate, private lending, and trust structures to build stable, long-term, compounding wealth.
              </p>
              <p>
                Our strategy is simple: <strong>Insurance funds real estate. Real estate enables lending. Lending accelerates cash flow. The Pension Trust preserves it all for our families.</strong>
              </p>
              <p className="text-xl font-bold text-blue-star-700 text-center pt-4">
                What begins as two Managing Partners builds into a 50-year legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section id="contact" className="section-container bg-gradient-to-br from-blue-star-700 to-blue-star-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-blue-star-100 mb-8">
            Contact us to discuss partnership opportunities and investment strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@bluestarequity.com" className="bg-white text-blue-star-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-star-50 transition shadow-lg">
              Email Us
            </a>
            <a href="tel:+1234567890" className="bg-blue-star-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-star-600 transition shadow-lg">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">⭐ Blue Star Equity Group</h3>
              <p className="text-sm">Building generational wealth through strategic business development.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#about" className="hover:text-white transition">About</a></div>
                <div><a href="#divisions" className="hover:text-white transition">Our Divisions</a></div>
                <div><a href="#strategy" className="hover:text-white transition">Strategy</a></div>
                <div><a href="#contact" className="hover:text-white transition">Contact</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div>Email: contact@bluestarequity.com</div>
                <div>Phone: (123) 456-7890</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Blue Star Equity Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* BSHI Business Plan Modal */}
      {showBSHIModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowBSHIModal(false)}>
          <div className="bg-white rounded-2xl max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-star-600 to-blue-star-700 text-white p-6 rounded-t-2xl flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">Blue Star Heritage Insurance</h2>
                <p className="text-blue-star-100">Independent Agency | Commercial | Public Sector | Real Estate | Personal Lines</p>
              </div>
              <button
                onClick={() => setShowBSHIModal(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Blue Star Heritage Insurance (BSHI) is a Texas-based independent insurance agency built to serve families, businesses, investors, and the public institutions that support our communities. We combine modern technology, deep industry knowledge, and a relationship-driven approach to deliver the kind of long-term insurance partnership that clients rarely experience today.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We provide comprehensive coverage solutions across personal lines, commercial lines, real estate portfolios, private lenders, and government and municipal entities.
                </p>
                <p className="text-xl font-bold text-blue-star-700 mt-6">
                  Our mission is simple: protect the people and organizations that build Texas.
                </p>
              </div>

              {/* Who We Serve */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  Who We Serve
                </h3>

                <div className="space-y-6">
                  {/* Personal Insurance */}
                  <div className="bg-blue-star-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Personal Insurance</h4>
                    <p className="text-gray-700 mb-3">We provide coverage for:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Homeowners & renters</li>
                      <li>• Auto and motorcycle</li>
                      <li>• Umbrella liability</li>
                      <li>• Specialty assets and valuables</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Our personal lines division focuses on education, transparency, and long-term relationships, not transactional sales.
                    </p>
                  </div>

                  {/* Commercial Insurance */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Commercial Insurance</h4>
                    <p className="text-gray-700 mb-3">BSHI specializes in small and mid-sized business coverage, including:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                      <div>• General liability</div>
                      <div>• Workers' compensation</div>
                      <div>• Property & equipment</div>
                      <div>• Fleet & commercial auto</div>
                      <div>• Professional liability</div>
                      <div>• Cybersecurity coverage</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      We help businesses understand risk, reduce exposure, and build durable coverage strategies as they scale.
                    </p>
                  </div>

                  {/* Government & Municipal */}
                  <div className="bg-blue-star-600 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <span className="mr-2">⭐</span>
                      Government & Municipal Insurance
                      <span className="ml-3 text-xs bg-white text-blue-star-600 px-2 py-1 rounded">NEW</span>
                    </h4>
                    <p className="mb-3">BSHI supports the organizations that serve Texas communities.</p>
                    <p className="font-semibold mb-2">We offer tailored programs for:</p>
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      <div>• Cities & towns (all sizes)</div>
                      <div>• Counties</div>
                      <div>• Utility & water districts</div>
                      <div>• Special purpose districts</div>
                      <div>• Public housing authorities</div>
                      <div>• Transportation authorities</div>
                      <div>• Parks & recreation departments</div>
                      <div>• Public works divisions</div>
                    </div>
                    <p className="font-semibold mb-2 text-blue-star-100">Common coverage includes:</p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div>• Public entity liability</div>
                      <div>• Property & infrastructure</div>
                      <div>• Law enforcement liability</div>
                      <div>• Public officials liability</div>
                      <div>• Fleet and emergency vehicles</div>
                      <div>• Water/sewer utilities</div>
                      <div>• Parks & event risk</div>
                    </div>
                    <div className="mt-4 bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-bold mb-2">Why this matters:</p>
                      <p className="text-sm">
                        Municipal clients require reliability, compliance, and ongoing partnership — all strengths of BSHI. Government accounts are long-term relationships that reward exceptional service, responsiveness, and stability.
                      </p>
                    </div>
                  </div>

                  {/* Real Estate Investors */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Real Estate Investors & Private Lenders</h4>
                    <p className="text-gray-700 mb-3">We offer tailored programs for:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                      <div>• Single-family portfolios</div>
                      <div>• Multifamily assets</div>
                      <div>• Short-term rentals</div>
                      <div>• Landlords & property managers</div>
                      <div>• Hard money lenders</div>
                      <div>• Private lenders</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      This complements future Blue Star FinCo lending and property holding initiatives inside the BSEG ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Advantage */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">⭐</span>
                  Strategic Advantage: Public Sector Focus
                </h3>
                <p className="text-gray-700 mb-4">Adding government and municipal risk management provides key benefits:</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Stable, long-term accounts with high retention rates</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Multi-line policies, increasing revenue per client</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Powerful referral ecosystem into contractors, vendors, and local businesses</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Aligns with BSEG's mission to strengthen Texas communities</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Positions BSHI as a comprehensive commercial agency</span>
                  </div>
                </div>
              </div>

              {/* 5-7 Year Strategic Plan */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  5–7 Year Strategic Plan
                </h3>

                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-blue-star-500 pl-6 bg-blue-star-50 p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-star-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 1</span>
                      <h4 className="text-xl font-bold text-gray-900">Years 1–2: Foundation & Learning</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Build core book: personal lines, small commercial, investor portfolios</li>
                      <li>• Identify 5–10 cities, towns, or districts as pipeline targets</li>
                      <li>• Establish relationships with city managers, purchasing directors, risk managers</li>
                      <li>• Attend local government, chamber, and civic meetings</li>
                      <li>• Develop municipal insurance knowledge base and carrier relationships</li>
                    </ul>
                    <div className="mt-4 bg-white p-4 rounded-lg">
                      <p className="font-bold text-gray-900">Goal:</p>
                      <p className="text-gray-700">Build a $400K–$600K book of business and position BSHI as a relationship-centric agency with expanding capabilities.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-blue-star-600 pl-6 bg-gray-50 p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-star-700 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 2</span>
                      <h4 className="text-xl font-bold text-gray-900">Years 3–5: Commercial & Early Municipal</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Actively pursue small and mid-sized public entities</li>
                      <li>• Bid on utility districts, small towns, and special districts</li>
                      <li>• Create formal RFP/RFQ response templates</li>
                      <li>• Establish dedicated public sector carrier appointments</li>
                      <li>• Grow real estate + investor segment for stability</li>
                    </ul>
                    <div className="mt-4 bg-white p-4 rounded-lg border-2 border-green-300">
                      <p className="font-bold text-gray-900 mb-2">Targets by end of Year 5:</p>
                      <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                        <div>→ 2–5 municipal/public entity accounts</div>
                        <div>→ $300K–$600K in municipal GWP</div>
                        <div>→ Total agency GWP: $1.5M–$3M</div>
                        <div>→ Strong cash flow supporting expansion</div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-blue-star-800 pl-6 bg-gradient-to-br from-blue-star-600 to-blue-star-700 text-white p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-white text-blue-star-700 px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 3</span>
                      <h4 className="text-xl font-bold">Years 5–7: Full Public Sector Verticalization</h4>
                    </div>
                    <ul className="space-y-2">
                      <li>• Create a Public Entity division inside BSHI</li>
                      <li>• Hire/train commercial producer specializing in public sector risk</li>
                      <li>• Move upstream into larger cities, counties, and authorities</li>
                      <li>• Bundle services with BSEG entities (FinCo, property management)</li>
                      <li>• Develop long-term municipal relationships (10+ year clients)</li>
                    </ul>
                    <div className="mt-4 bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                      <p className="font-bold mb-2">Targets by Year 7:</p>
                      <div className="space-y-1 text-sm">
                        <div>→ 10–20 government/public entity accounts</div>
                        <div>→ $1M–$2M GWP from public sector alone</div>
                        <div>→ Total agency GWP: $4M–$6M+</div>
                        <div>→ Annual commissions from public sector: $120K–$300K+</div>
                        <div className="font-bold mt-2 text-lg">→ Strong recurring, recession-resistant revenue base</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Model */}
              <div className="bg-gray-900 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Financial Model (Industry Standard, New Agency)</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-blue-star-300">Years 1–2</h4>
                    <div className="space-y-2 text-sm">
                      <div>GWP: $400K–$600K</div>
                      <div>Commissions: $40K–$80K</div>
                      <div>Expenses: Low (founders only)</div>
                      <div className="font-bold text-green-300">Margin: 50–70%</div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-blue-star-300">Years 3–5</h4>
                    <div className="space-y-2 text-sm">
                      <div>GWP: $1.5M–$3M</div>
                      <div>Commissions: $180K–$360K</div>
                      <div>Add minimal staff</div>
                      <div className="font-bold text-green-300">Margin: 35–55%</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Years 5–7</h4>
                    <div className="space-y-2 text-sm">
                      <div>GWP: $4M–$6M+</div>
                      <div>Commissions: $500K–$750K+</div>
                      <div>Public sector = major component</div>
                      <div className="font-bold text-white">Margin: 35–50%</div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-lg">
                  BSHI becomes a strong, low-employee, long-term revenue engine for BSEG, feeding both FinCo (future lending) and Property Holdings (future acquisitions).
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-star-600 to-blue-star-700 text-white p-6 rounded-xl text-center">
                <p className="text-lg mb-4">Learn more about Howard Reid, Managing Partner</p>
                <a
                  href="https://www.linkedin.com/in/howardareid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-star-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-star-50 transition shadow-lg"
                >
                  View LinkedIn Profile →
                </a>
              </div>

              {/* Close Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowBSHIModal(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FinCo Business Plan Modal */}
      {showFinCoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowFinCoModal(false)}>
          <div className="bg-white rounded-2xl max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-star-700 to-blue-star-900 text-white p-6 rounded-t-2xl flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">Blue Star FinCo</h2>
                <p className="text-blue-star-100">Private Lending • Asset Financing • Real Estate Funding Solutions</p>
              </div>
              <button
                onClick={() => setShowFinCoModal(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Blue Star FinCo is the financial engine of Blue Star Equity Group — a private lending and asset-financing company built to support real estate investors, entrepreneurs, developers, and eventually BSEG's own portfolio of properties and operating companies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  FinCo empowers clients to move quickly, fund opportunities that banks move too slowly on, and access flexible capital with transparent terms, structured risk management, and a relationship-driven model.
                </p>
                <p className="text-xl font-bold text-blue-star-700 mt-6">
                  Our mission is simple: provide smart, fast, secure financing for the projects that build communities and generate long-term wealth.
                </p>
              </div>

              {/* Company Profile */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  Company Profile
                </h3>

                <div className="space-y-6">
                  {/* Who We Serve */}
                  <div className="bg-blue-star-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Who We Serve</h4>
                    <p className="text-gray-700 mb-3">Blue Star FinCo provides capital for:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Real estate investors (flips, BRRRR, rentals)</li>
                      <li>• Developers (small to midsize projects)</li>
                      <li>• Land acquisition & improvement</li>
                      <li>• Private lenders seeking capital stacking</li>
                      <li>• Entrepreneurs needing small business asset financing</li>
                      <li>• Future BSEG subsidiaries (equipment, vehicles, facilities)</li>
                    </ul>
                  </div>

                  {/* What We Offer */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">What We Offer</h4>
                    <p className="text-gray-700 mb-3">We issue multiple types of financing:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                      <div>• Short-Term Real Estate Loans (6–12 months)</div>
                      <div>• Bridge Loans</div>
                      <div>• Fix & Flip Loans</div>
                      <div>• Rental Property DSCR Loans (3–30 years)</div>
                      <div>• Refinance or Cash-Out Loans</div>
                      <div>• Equipment Loans (future)</div>
                    </div>
                  </div>

                  {/* Typical Loan Terms */}
                  <div className="bg-blue-star-600 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3">Typical Loan Terms</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold mb-1">Loan-to-Value (LTV):</p>
                        <p className="text-blue-star-100">65–80%</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Interest Rates:</p>
                        <p className="text-blue-star-100">10%–15% (industry standard)</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Origination Fees:</p>
                        <p className="text-blue-star-100">1–3 points</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Decision Timeline:</p>
                        <p className="text-blue-star-100">24–48 hours</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-blue-star-100 italic">
                      Appraisal not always required. These rates and structures are fully aligned with private lending norms and build strong recurring revenue for the holding company.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Role */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">⭐</span>
                  Strategic Role in the BSEG Ecosystem
                </h3>
                <p className="text-gray-700 mb-4">FinCo eventually becomes the capital backbone of Blue Star by:</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Providing funding for property acquisitions for Property Holdings</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Financing improvements, rehabs, and new construction</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Funding equipment for future service companies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Helping BSHI generate bundled clients (insurance + lending)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Creating long-term, compounding recurring revenue</span>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-800">
                  Even before BSEG grows into a multi-company portfolio, FinCo stands alone as a highly profitable lending enterprise.
                </p>
              </div>

              {/* Compliance & Structure */}
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  Compliance & Structure
                </h3>
                <p className="text-gray-700 mb-4">
                  Blue Star FinCo operates as a <strong>private lending company, not a bank</strong>. This keeps compliance simpler and focuses on:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <div>• Secured real estate-backed loans</div>
                  <div>• Clear underwriting guidelines</div>
                  <div>• Proper loan documentation</div>
                  <div>• State-compliant lending limits</div>
                  <div>• Strategic risk control</div>
                </div>
                <p className="mt-4 text-sm text-gray-600 italic">
                  FinCo will consult legal counsel early to finalize lending parameters and lending licenses (as required by Texas and any future states).
                </p>
              </div>

              {/* 5-7 Year Strategic Plan */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  5–7 Year Strategic Plan
                </h3>
                <p className="text-gray-600 mb-6 italic">
                  This roadmap is built for realistic capital, risk control, and scalability.
                </p>

                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-yellow-500 pl-6 bg-yellow-50 p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 1</span>
                      <h4 className="text-xl font-bold text-gray-900">Years 1–2: Foundation & Capital Formation</h4>
                    </div>
                    <p className="text-gray-700 mb-4 font-semibold">(Before Lending Begins)</p>
                    <p className="text-gray-700 mb-4">
                      Because FinCo won't be funded at inception, the first stage focuses on:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Building business credit for BSEG</li>
                      <li>• Establishing banking relationships</li>
                      <li>• Creating lending guidelines, underwriting criteria, and loan docs</li>
                      <li>• Learning the private lending industry in depth</li>
                      <li>• Supported revenue via BSHI while capital accumulates</li>
                      <li>• Saving cash for FinCo capitalization</li>
                    </ul>
                    <div className="mt-4 bg-white p-4 rounded-lg border-2 border-yellow-300">
                      <p className="font-bold text-gray-900">Target:</p>
                      <p className="text-gray-700">Raise $150K–$300K initial lending pool by end of Year 2</p>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        During this period, FinCo builds its brand, processes, and technology but does not lend yet.
                      </p>
                    </div>
                    <div className="mt-4 bg-blue-star-100 p-4 rounded-lg">
                      <p className="font-bold text-blue-star-900">Primary Goal:</p>
                      <p className="text-blue-star-800">Prepare for safe, scalable lending operations starting in Year 3.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-blue-star-600 pl-6 bg-blue-star-50 p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-star-700 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 2</span>
                      <h4 className="text-xl font-bold text-gray-900">Years 3–5: Launch Lending Operations</h4>
                    </div>
                    <p className="text-gray-700 mb-4 font-semibold">After establishing capital:</p>

                    <div className="mb-4">
                      <p className="font-semibold text-gray-900 mb-2">Year 3 Launch Goals:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Begin lending with $150K–$300K initial pool</li>
                        <li>• Focus on low-risk, short-term real estate loans</li>
                        <li>• Prioritize experienced investors and repeat borrowers</li>
                        <li>• Offer bundled insurance through BSHI to protect collateral</li>
                        <li>• Build reputation as a reliable private lender in DFW & Texas</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="font-bold text-gray-900 mb-3">Expected Performance (Years 3–5):</p>
                      <div className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                        <div>• Average loan size: $50K–$150K</div>
                        <div>• Annual loan turnover: 2–4 times/year</div>
                        <div>• Monthly interest = recurring cash flow</div>
                        <div>• Points generate immediate revenue</div>
                      </div>
                    </div>

                    <div className="bg-gray-900 text-white p-4 rounded-lg">
                      <p className="font-bold mb-3">Example Year 4 Financial Snapshot:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Loan Portfolio:</span>
                          <span className="font-semibold">$500K–$1M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Annual Yield:</span>
                          <span className="font-semibold">12–14%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Origination Fees (2-3 pts):</span>
                          <span className="font-semibold">$20K–$40K/yr</span>
                        </div>
                        <div className="flex justify-between border-t border-white border-opacity-20 pt-2">
                          <span>Revenue:</span>
                          <span className="font-bold text-green-300">$80K–$150K+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Profit Margin:</span>
                          <span className="font-bold text-green-300">60%–80%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-blue-star-100 p-4 rounded-lg">
                      <p className="font-bold text-blue-star-900">Primary Goal:</p>
                      <p className="text-blue-star-800">Establish FinCo as a trusted regional lender with strong recurring revenue.</p>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-green-600 pl-6 bg-gradient-to-br from-green-600 to-emerald-700 text-white p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 3</span>
                      <h4 className="text-xl font-bold">Years 5–7: Scale Into Multi-Million Dollar Platform</h4>
                    </div>
                    <p className="mb-4">As retained earnings compound and reputation grows:</p>
                    <ul className="space-y-2 mb-4">
                      <li>• Expand loan offerings: DSCR, BRRRR funding, new construction</li>
                      <li>• Build brokerage partnerships with realtors, GCs, lenders, investors</li>
                      <li>• Add additional capital sources (private investors + capital stack)</li>
                      <li>• Begin lending to developers on structured terms</li>
                      <li>• Acquire or finance income-producing properties for BSEG</li>
                      <li>• Integrate FinCo with Property Holdings for turnkey development</li>
                      <li>• Begin offering equipment loans when BSEG launches service companies</li>
                    </ul>

                    <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                      <p className="font-bold mb-3">Expected Loan Portfolio Size by Year 7:</p>
                      <div className="space-y-2 text-sm">
                        <div>→ $2M–$5M active portfolio</div>
                        <div>→ 10%–14% yield + points</div>
                        <div className="font-bold text-lg">→ Revenue: $300K–$700K+</div>
                        <div>→ Profit Margin: 50%–70%</div>
                      </div>
                      <p className="mt-4 font-bold text-lg">
                        FinCo becomes a high-margin cash engine, fueling both BSEG growth and generational wealth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7-Year Financial Projection */}
              <div className="bg-gray-900 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">⭐</span>
                  7-Year Financial Projection
                </h3>
                <p className="text-gray-300 mb-6 italic">Industry Standard - Conservative Growth & Reinvestment</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-2">Year</th>
                        <th className="text-left py-3 px-2">Loan Pool</th>
                        <th className="text-left py-3 px-2">Avg Yield</th>
                        <th className="text-left py-3 px-2">Annual Revenue</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">1</td>
                        <td className="py-3 px-2">$0</td>
                        <td className="py-3 px-2">—</td>
                        <td className="py-3 px-2">$0</td>
                        <td className="py-3 px-2 text-gray-400">Planning & compliance only</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">2</td>
                        <td className="py-3 px-2">$0</td>
                        <td className="py-3 px-2">—</td>
                        <td className="py-3 px-2">$0</td>
                        <td className="py-3 px-2 text-gray-400">Capital accumulation</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-white bg-opacity-5">
                        <td className="py-3 px-2 font-semibold">3</td>
                        <td className="py-3 px-2">$200K</td>
                        <td className="py-3 px-2">12%</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$24K–$35K</td>
                        <td className="py-3 px-2 text-gray-400">First year lending</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">4</td>
                        <td className="py-3 px-2">$500K</td>
                        <td className="py-3 px-2">12%</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$70K–$100K</td>
                        <td className="py-3 px-2 text-gray-400">Repeat borrowers fuel growth</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-white bg-opacity-5">
                        <td className="py-3 px-2 font-semibold">5</td>
                        <td className="py-3 px-2">$1M</td>
                        <td className="py-3 px-2">12%</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$140K–$180K</td>
                        <td className="py-3 px-2 text-gray-400">Take on larger collateral</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">6</td>
                        <td className="py-3 px-2">$2M</td>
                        <td className="py-3 px-2">12%</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$300K–$450K</td>
                        <td className="py-3 px-2 text-gray-400">More complex loan products</td>
                      </tr>
                      <tr className="bg-green-900 bg-opacity-30">
                        <td className="py-3 px-2 font-bold">7</td>
                        <td className="py-3 px-2 font-bold">$3M–$5M</td>
                        <td className="py-3 px-2 font-bold">12%</td>
                        <td className="py-3 px-2 font-bold text-green-300 text-lg">$450K–$700K+</td>
                        <td className="py-3 px-2 font-semibold">Mature cash engine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Close Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowFinCoModal(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
