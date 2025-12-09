import React, { useState } from 'react';

function App() {
  const [showBSHIModal, setShowBSHIModal] = useState(false);
  const [showFinCoModal, setShowFinCoModal] = useState(false);
  const [showPensionModal, setShowPensionModal] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showPropertyMgmtModal, setShowPropertyMgmtModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-star-700">⭐ Blue Star Equity Group Strategy & Vision</span>
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
                  <h4 className="font-bold text-xl text-blue-star-700 mb-2">Daron McBee</h4>
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
      <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-star-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
            Highlighted <span className="text-blue-star-300">Pillars</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg">The Five Divisions of Blue Star Equity Group</p>

          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

            {/* Division 2 - FinCo */}
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
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Division 3 - Property Holdings */}
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
                <button
                  onClick={() => setShowPropertyModal(true)}
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
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group">
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
                <button
                  onClick={() => setShowPropertyMgmtModal(true)}
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

            {/* Division 5 - Pension Trust */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-star-500 hover:shadow-lg hover:shadow-blue-star-500/20 transition-all duration-300 group">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-star-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Blue Star Pension Trust</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Generational wealth engine launching Years 5-7. Owns life insurance, accumulates cash value, holds real estate entities, and receives profit distributions. Provides legal asset protection, tax-advantaged growth, and ensures 50-year family wealth legacy.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setShowPensionModal(true)}
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

      {/* Pension Trust Business Plan Modal */}
      {showPensionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPensionModal(false)}>
          <div className="bg-white rounded-2xl max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-star-800 via-blue-star-700 to-blue-star-900 text-white p-6 rounded-t-2xl flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">Blue Star Pension Trust</h2>
                <p className="text-blue-star-100">Generational Wealth • Tax Efficiency • Long-Term Capital Reserves</p>
              </div>
              <button
                onClick={() => setShowPensionModal(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Blue Star Pension Trust is the long-term wealth engine and stabilizing financial foundation of the Blue Star ecosystem. While the operating companies create cash flow and FinCo generates high-yield lending returns, the Pension Trust converts that success into permanent, protected, multi-generational wealth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Built on high cash-value life insurance strategies used by family offices, private equity firms, and the ultra-wealthy, the Pension Trust allows the partners of Blue Star to build a tax-efficient reservoir of capital that grows predictably, compounds annually, and provides liquidity for personal and business needs without disrupting company operations.
                </p>
                <p className="text-xl font-bold text-blue-star-700 mt-6">
                  This trust is not a retirement plan — it is the perpetual vault of the Blue Star enterprise.
                </p>
              </div>

              {/* Trust Profile */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  Trust Profile
                </h3>

                <div className="space-y-6">
                  {/* Primary Purpose */}
                  <div className="bg-blue-star-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Primary Purpose</h4>
                    <p className="text-gray-700 mb-3">The Pension Trust exists to:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Build long-term, stable, tax-efficient wealth</li>
                      <li>• Protect partners and heirs through permanent insurance coverage</li>
                      <li>• Provide liquidity through policy loans (for expansions, down payments, emergencies)</li>
                      <li>• Create a capital reserve insulated from lawsuits, creditors, or business failure</li>
                      <li>• Serve as a self-funded "bank" for future ventures</li>
                      <li>• Ensure Blue Star's generational continuity</li>
                    </ul>
                  </div>

                  {/* Core Strategy */}
                  <div className="bg-gradient-to-br from-blue-star-600 to-blue-star-800 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3">Core Strategy</h4>
                    <p className="mb-4">The trust relies on a portfolio of high cash-value whole life insurance policies with the following characteristics:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>10–40x leverage over the life of the insured</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Guaranteed growth + dividends</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Tax-free compounding of cash value</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Tax-free distribution through policy loans</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Death benefit to heirs or the trust</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Asset protection (TX favorable)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-star-200 mr-2">✓</span>
                        <span>Not correlated to stock market volatility</span>
                      </div>
                    </div>
                    <p className="mt-4 font-bold text-lg">
                      This makes the Pension Trust the safest and most predictable financial pillar in the BSEG system.
                    </p>
                  </div>
                </div>
              </div>

              {/* How the Pension Trust Works */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-star-600 mr-2">⭐</span>
                  How the Pension Trust Works
                </h3>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-star-500">
                    <div className="flex items-start">
                      <span className="bg-blue-star-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Annual Contributions</h4>
                        <div className="space-y-2 text-gray-700">
                          <p>• BSEG contributes 5–10% of annual profits</p>
                          <p>• BSHI contributes once profitable</p>
                          <p>• FinCo contributes once loan revenue stabilizes</p>
                        </div>
                        <p className="mt-3 text-gray-600 italic">Each contribution funds whole life premiums to increase cash value.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-blue-star-50 p-6 rounded-xl border-l-4 border-blue-star-600">
                    <div className="flex items-start">
                      <span className="bg-blue-star-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Rapid Cash Value Growth</h4>
                        <p className="text-gray-700">
                          Policies are structured for maximized early cash value, allowing <strong>60–80% liquidity in Year 1</strong> and <strong>100%+ liquidity in Years 3–7</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                    <div className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Liquidity Through Policy Loans</h4>
                        <p className="text-gray-700 mb-3">The trust can borrow against cash value at 4–6% interest to:</p>
                        <div className="space-y-2 text-gray-700 mb-4">
                          <p>• Fund property purchases (through Property Holdings)</p>
                          <p>• Provide capital to FinCo for lending</p>
                          <p>• Support Blue Star expansions</p>
                          <p>• Cover emergencies without disrupting operations</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="font-bold text-green-900 mb-2">Loans do NOT require:</p>
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-green-800">
                            <div>• Credit checks</div>
                            <div>• Income verification</div>
                            <div>• Debt ratios</div>
                            <div>• External lender approval</div>
                          </div>
                          <p className="mt-3 font-bold text-green-900">The trust effectively becomes its own bank.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-gradient-to-br from-blue-star-700 to-blue-star-900 text-white p-6 rounded-xl border-l-4 border-yellow-400">
                    <div className="flex items-start">
                      <span className="bg-yellow-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3">Death Benefits for Generational Wealth</h4>
                        <p className="mb-3">When a partner passes away:</p>
                        <div className="space-y-2 mb-4">
                          <p>• The trust receives the tax-free payout</p>
                          <p>• Funds remain in the trust permanently</p>
                          <p>• Income continues to support heirs through structured payouts</p>
                          <p>• The trust becomes stronger with every generation</p>
                        </div>
                        <p className="font-bold text-xl text-yellow-300">This is how family dynasties are built.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Integration */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">⭐</span>
                  Strategic Integration with Blue Star Ecosystem
                </h3>
                <p className="text-gray-700 mb-4">The Pension Trust supports every division:</p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">✓ Property Holdings</h5>
                    <p className="text-gray-700 text-sm">Provides down payments or renovation capital through internal loans.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">✓ FinCo</h5>
                    <p className="text-gray-700 text-sm">Supplies capital for lending without seeking external investors.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">✓ BSEG (Holdings)</h5>
                    <p className="text-gray-700 text-sm">Ensures long-term security and a stable reserve fund.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">✓ BSHI (Insurance Agency)</h5>
                    <p className="text-gray-700 text-sm">Supports cross-selling life insurance (eventually, when licensed).</p>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-800 text-center text-lg">
                  The trust is the silent engine that keeps the ecosystem stable and growing for decades.
                </p>
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
                      <h4 className="text-xl font-bold text-gray-900">Years 1–2: Foundation & Policy Acquisition</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li>• Establish trust charter and governance</li>
                      <li>• Acquire first high cash-value whole life policies for each partner</li>
                      <li>• Set annual contribution targets (e.g., $10K–$40K per partner)</li>
                      <li>• Build relationship with top-tier mutual insurer (NYL, MassMutual, Guardian)</li>
                      <li>• Begin early cash value accumulation</li>
                    </ul>
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-star-300">
                      <p className="font-bold text-gray-900">By end of Year 2:</p>
                      <p className="text-blue-star-700 font-semibold">Trust cash value target → $40K–$80K</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 2</span>
                      <h4 className="text-xl font-bold text-gray-900">Years 3–5: Liquidity Growth & Internal Banking</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li>• Cash value becomes large enough to fund small internal loans</li>
                      <li>• Begin funding Property Holdings or BSEG from trust policy loans</li>
                      <li>• Contributions increase as BSHI and FinCo become profitable</li>
                      <li>• Add policies for spouses or key partners</li>
                      <li>• Use dividends to accelerate growth</li>
                    </ul>
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <p className="font-bold text-gray-900 mb-2">By end of Year 5:</p>
                      <div className="space-y-1 text-gray-700">
                        <p>• Total trust cash value → <span className="font-semibold text-green-700">$120K–$250K</span></p>
                        <p>• Annual dividend growth rate → <span className="font-semibold text-green-700">4–6%</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-blue-star-800 pl-6 bg-gradient-to-br from-blue-star-700 to-blue-star-900 text-white p-6 rounded-r-xl">
                    <div className="flex items-center mb-3">
                      <span className="bg-white text-blue-star-700 px-3 py-1 rounded-full text-sm font-bold mr-3">Phase 3</span>
                      <h4 className="text-xl font-bold">Years 5–7: Expansion & Multi-Generational Structuring</h4>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li>• Acquire additional policies for succession planning</li>
                      <li>• Begin using trust as a major funding source for real estate acquisitions</li>
                      <li>• Fund FinCo expansion loans (highly profitable recycling)</li>
                      <li>• Establish trust-owned investment accounts (ultra conservative)</li>
                      <li>• Draft multi-generational distribution rules</li>
                    </ul>
                    <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                      <p className="font-bold mb-3">By end of Year 7:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total trust cash value:</span>
                          <span className="font-semibold text-yellow-300">$300K–$600K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Death benefit total:</span>
                          <span className="font-semibold text-yellow-300">$3M–$7M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Policy loan capacity:</span>
                          <span className="font-semibold text-yellow-300">$200K–$400K</span>
                        </div>
                      </div>
                      <p className="mt-4 font-bold text-lg text-center">
                        The trust becomes a fully functioning Family Office financial pillar.
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
                <p className="text-gray-300 mb-6 italic">Conservative, Industry Standard (Guardian, MassMutual, NYL Whole Life Policies)</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-2">Year</th>
                        <th className="text-left py-3 px-2">Contributions</th>
                        <th className="text-left py-3 px-2">Cash Value</th>
                        <th className="text-left py-3 px-2">Loan Capacity</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">1</td>
                        <td className="py-3 px-2">$20K–$40K</td>
                        <td className="py-3 px-2 text-blue-star-300">$12K–$30K</td>
                        <td className="py-3 px-2">$8K–$20K</td>
                        <td className="py-3 px-2 text-gray-400">Early-stage policies</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-white bg-opacity-5">
                        <td className="py-3 px-2 font-semibold">2</td>
                        <td className="py-3 px-2">$20K–$40K</td>
                        <td className="py-3 px-2 text-blue-star-300">$40K–$80K</td>
                        <td className="py-3 px-2">$25K–$55K</td>
                        <td className="py-3 px-2 text-gray-400">Liquidity improves</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">3</td>
                        <td className="py-3 px-2">$25K–$50K</td>
                        <td className="py-3 px-2 text-blue-star-300">$70K–$130K</td>
                        <td className="py-3 px-2">$45K–$90K</td>
                        <td className="py-3 px-2 text-gray-400">Eligible for internal loans</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-white bg-opacity-5">
                        <td className="py-3 px-2 font-semibold">4</td>
                        <td className="py-3 px-2">$25K–$50K</td>
                        <td className="py-3 px-2 text-blue-star-300">$100K–$180K</td>
                        <td className="py-3 px-2">$70K–$125K</td>
                        <td className="py-3 px-2 text-gray-400">Dividend compounding begins</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-2 font-semibold">5</td>
                        <td className="py-3 px-2">$30K–$60K</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$150K–$250K</td>
                        <td className="py-3 px-2">$100K–$170K</td>
                        <td className="py-3 px-2 text-gray-400">First major funding ops</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-white bg-opacity-5">
                        <td className="py-3 px-2 font-semibold">6</td>
                        <td className="py-3 px-2">$30K–$60K</td>
                        <td className="py-3 px-2 text-green-300 font-semibold">$200K–$380K</td>
                        <td className="py-3 px-2">$135K–$260K</td>
                        <td className="py-3 px-2 text-gray-400">Supports property deals</td>
                      </tr>
                      <tr className="bg-green-900 bg-opacity-30">
                        <td className="py-3 px-2 font-bold">7</td>
                        <td className="py-3 px-2 font-bold">$35K–$70K</td>
                        <td className="py-3 px-2 font-bold text-green-300 text-lg">$300K–$600K</td>
                        <td className="py-3 px-2 font-bold">$200K–$400K</td>
                        <td className="py-3 px-2 font-semibold">Self-banking maturity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Close Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowPensionModal(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Property Holdings Modal */}
      {showPropertyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-8">
              <h2 className="text-4xl font-bold mb-3">Blue Star Property Holdings</h2>
              <p className="text-xl text-gray-300">Strategic Real Estate. Protected Assets. Passive Wealth.</p>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Blue Star Property Holdings is the dedicated real-estate acquisition and management arm of the Blue Star ecosystem. Its purpose is to build a durable, diversified portfolio of income-producing assets that compound in value, generate stable cash flow, and provide long-term wealth security for the partners and their families.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Where Blue Star Heritage Insurance generates recurring commissions and Blue Star FinCo produces high-yield lending income, Blue Star Property Holdings focuses on equity accumulation, appreciation, and passive income. Together, these divisions create the foundation of a multi-generational wealth engine.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Blue Star Property Holdings operates with a disciplined, conservative strategy:
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-star-600 p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span>Acquire undervalued or distressed properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span>Improve them through light renovations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span>Rent or resell for profit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span>Hold core assets long-term for equity growth</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Each property is placed in its own LLC for liability isolation and rolled up under the Property Holdings umbrella, providing clean tax structure, asset protection, and a professional acquisition framework.
                </p>
              </div>

              {/* Company Profile */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Company Profile
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-3">Core Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To acquire, improve, and manage a portfolio of real estate assets that produce stable, passive income and long-term equity, supporting the broader Blue Star financial ecosystem and providing generational security.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-3">Primary Roles</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">Blue Star Property Holdings exists to:</p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Build a growing portfolio of rental and investment properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Create passive income for BSEG partners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Serve as collateral and leverage for future acquisitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Provide real assets backing Blue Star FinCo lending operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Offer steady, predictable returns not tied to market volatility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span>Utilize internal capital (Pension Trust + FinCo) for low-friction funding</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-3">Types of Properties Targeted</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Single-family rentals</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Duplexes / small multis (2–8 units)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Small commercial properties (Phase 2 or 3)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Distressed homes suitable for fix-and-flip</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Foreclosures or off-market deals</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Properties in rising or stable rental markets</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Advantage */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Strategic Advantage in the Blue Star Ecosystem
                </h3>

                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-3">1. Internal Liquidity Through Pension Trust</h4>
                    <p className="text-gray-700 mb-3">The Pension Trust provides tax-efficient capital that can be borrowed for:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Down payments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Renovations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Emergency funding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Short-term acquisition capital</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3 font-semibold">No credit checks. No bank underwriting. No delays.</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">2. Reinforcement From Blue Star FinCo</h4>
                    <p className="text-gray-700 mb-3">FinCo eventually provides:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Rehab loans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Bridge loans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Hard money lending</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>High-yield returns backed by real assets</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3">Property Holdings benefits from FinCo's capital while also strengthening FinCo's loan book.</p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-3">3. Insurance Link Through BSHI</h4>
                    <p className="text-gray-700 mb-3">Every property must be insured — and BSHI captures:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3">•</span>
                        <span>Homeowners</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3">•</span>
                        <span>Renters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3">•</span>
                        <span>Landlord policies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3">•</span>
                        <span>Property liability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3">•</span>
                        <span>Builders risk (for flips)</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3 font-semibold">This keeps wealth and cash flow inside the Blue Star ecosystem.</p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
                    <h4 className="text-lg font-bold text-orange-800 mb-3">4. BSEG Management Oversight</h4>
                    <p className="text-gray-700">The holding company receives a 10% management fee, providing operational funding and long-term business stability.</p>
                  </div>
                </div>
              </div>

              {/* 5-7 Year Business Plan */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  5–7 Year Business Plan
                </h3>

                {/* Phase 1 */}
                <div className="mb-6 border-l-4 border-yellow-500 bg-yellow-50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm mr-4">PHASE 1</span>
                    <h4 className="text-2xl font-bold text-gray-900">Years 1–2: Foundation & First Acquisitions</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Form Property Holdings LLC + create template structure for subsidiary LLCs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Acquire 1–2 small residential rentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Target: $120K–$200K properties needing minor updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Establish property management workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Build banking and accounting structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Begin producing first passive income streams</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">Year 1–2 Targets:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div>• Portfolio Value: $200K–$350K</div>
                      <div>• Monthly Net Cash Flow: $300–$700</div>
                      <div className="md:col-span-2">• Renovation ROI: 10–15%</div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="mb-6 border-l-4 border-blue-500 bg-blue-50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm mr-4">PHASE 2</span>
                    <h4 className="text-2xl font-bold text-gray-900">Years 3–5: Scaling the Portfolio & Introducing Flips</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Acquire 2–4 properties per year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Introduce flip properties if capital allows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Begin using Pension Trust loans for acquisitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Introduce small multi-family opportunities (duplex / fourplex)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Outsource maintenance where needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Build relationships with wholesalers, agents, and contractors</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">Year 3–5 Targets:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div>• Portfolio Value: $750K–$1.5M</div>
                      <div>• Monthly Net Cash Flow: $1,500–$3,000</div>
                      <div>• Annual Flip Profit: $25K–$60K (optional)</div>
                      <div>• Equity Growth from Appreciation: 2–4% per year</div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="mb-6 border-l-4 border-green-500 bg-green-50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm mr-4">PHASE 3</span>
                    <h4 className="text-2xl font-bold text-gray-900">Years 5–7: Maturity, Leverage, and Multi-Unit Expansion</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Add 2–3 larger assets (fourplex or commercial office condo)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Leverage existing equity to fund new acquisitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Introduce internal financing via FinCo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Strategic refinances to increase liquidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Build property management systems for long-term sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Evaluate selling select assets to upgrade to higher-performing ones</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-2">Year 5–7 Targets:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div>• Portfolio Value: $2M–$3.5M</div>
                      <div>• Monthly Net Cash Flow: $3,000–$6,000</div>
                      <div>• Total Equity Position: $600K–$1M</div>
                      <div>• Internal Loan Use: $200K–$400K</div>
                      <div className="md:col-span-2">• Properties Owned: 7–12 assets</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 font-semibold italic">
                    By Year 7, this becomes a self-sustaining wealth engine capable of funding itself.
                  </p>
                </div>
              </div>

              {/* Financial Projection */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Financial Projection (7-Year Snapshot)
                </h3>
                <p className="text-gray-700 mb-4">
                  These projections reflect common new-investor performance in Texas and Midwest markets, adjusted conservatively:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-star-700 to-blue-star-900 text-white">
                        <th className="px-6 py-4 text-left font-bold">Year</th>
                        <th className="px-6 py-4 text-left font-bold">Properties Owned</th>
                        <th className="px-6 py-4 text-left font-bold">Annual Cash Flow</th>
                        <th className="px-6 py-4 text-left font-bold">Equity Growth</th>
                        <th className="px-6 py-4 text-left font-bold">Portfolio Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">1</td>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">$2K–$4K</td>
                        <td className="px-6 py-4">$5K–$10K</td>
                        <td className="px-6 py-4 font-semibold">$150K–$200K</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 bg-gray-50">
                        <td className="px-6 py-4 font-semibold">2</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">$4K–$7K</td>
                        <td className="px-6 py-4">$10K–$20K</td>
                        <td className="px-6 py-4 font-semibold">$250K–$350K</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">3</td>
                        <td className="px-6 py-4">3–4</td>
                        <td className="px-6 py-4">$8K–$12K</td>
                        <td className="px-6 py-4">$20K–$35K</td>
                        <td className="px-6 py-4 font-semibold">$450K–$700K</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 bg-gray-50">
                        <td className="px-6 py-4 font-semibold">4</td>
                        <td className="px-6 py-4">4–6</td>
                        <td className="px-6 py-4">$12K–$18K</td>
                        <td className="px-6 py-4">$35K–$60K</td>
                        <td className="px-6 py-4 font-semibold">$700K–$1.1M</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">5</td>
                        <td className="px-6 py-4">6–8</td>
                        <td className="px-6 py-4">$18K–$28K</td>
                        <td className="px-6 py-4">$60K–$100K</td>
                        <td className="px-6 py-4 font-semibold">$1.1M–$1.5M</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50 bg-gray-50">
                        <td className="px-6 py-4 font-semibold">6</td>
                        <td className="px-6 py-4">8–10</td>
                        <td className="px-6 py-4">$25K–$40K</td>
                        <td className="px-6 py-4">$100K–$150K</td>
                        <td className="px-6 py-4 font-semibold">$1.5M–$2.5M</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">7</td>
                        <td className="px-6 py-4">10–12</td>
                        <td className="px-6 py-4">$35K–$60K</td>
                        <td className="px-6 py-4">$150K–$250K</td>
                        <td className="px-6 py-4 font-semibold text-blue-star-700">$2M–$3.5M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mt-4 italic">
                  Even modest growth leads to multi-million-dollar asset holdings in under a decade.
                </p>
              </div>

              {/* Close Button */}
              <div className="flex justify-center pt-6 border-t">
                <button
                  onClick={() => setShowPropertyModal(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Property Management Modal */}
      {showPropertyMgmtModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-blue-star-800 via-blue-star-700 to-blue-star-900 text-white p-8">
              <h2 className="text-4xl font-bold mb-3">Blue Star Property Management</h2>
              <p className="text-xl text-gray-200">Company Profile, Strategic Plan, and 7-Year Growth Model</p>
              <p className="text-sm text-gray-300 mt-2">A subsidiary of Blue Star Equity Group (BSEG)</p>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Company Identity */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">1. Company Identity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-star-700 mb-2">Name</h4>
                    <p className="text-gray-700">Blue Star Property Management (BSPM)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-star-700 mb-2">Parent Company</h4>
                    <p className="text-gray-700">Blue Star Equity Group</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-star-700 mb-2">Focus</h4>
                    <p className="text-gray-700">Multifamily, apartment complexes, and commercial property management</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-star-700 mb-2">Service Area</h4>
                    <p className="text-gray-700">Texas + regional expansion markets</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
                    <h4 className="font-bold text-blue-star-700 mb-2">Founders / Partners</h4>
                    <p className="text-gray-700">Howard Reid & Daron McBee</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-star-50 to-blue-100 border-l-4 border-blue-star-600 p-6">
                  <h4 className="font-bold text-blue-star-800 mb-3">Purpose</h4>
                  <p className="text-gray-700 leading-relaxed">
                    BSPM exists to provide high-performance asset management for multifamily, apartment, and commercial real estate investments. We combine the discipline of a private-equity operation with the attentiveness of a boutique management company.
                  </p>
                </div>
              </div>

              {/* Company Mission */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">2. Company Mission</h3>
                <div className="bg-green-50 border-l-4 border-green-600 p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To deliver institutional-grade management for multifamily and commercial properties while protecting investor capital, maximizing NOI, improving tenant experience, and driving long-term asset appreciation.
                  </p>
                </div>
              </div>

              {/* Company Vision */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">3. Company Vision</h3>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To become a leading regional provider of multifamily and commercial property management—known for operational excellence, transparent reporting, government-compliant processes, and unmatched investor returns.
                  </p>
                </div>
              </div>

              {/* Brand Positioning */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">4. Brand Positioning</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-3">Blue Star Property Management is built for:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Owners of multifamily (2–20 units)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Small to midsize apartment complexes (20–100 units)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Commercial offices</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Retail strip centers</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Warehouse and flex space</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Government and municipal buildings</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-3">We operate with:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Private-equity discipline</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Insurance-backed risk management</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Finance-driven asset optimization</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 mr-3">•</span>
                      <span className="text-gray-700">Transparent reporting and compliance</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 font-semibold italic">
                    No distractions. No homeowner emotions. Just real assets, real income, real performance.
                  </p>
                </div>
              </div>

              {/* Why This Company Exists */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">5. Why This Company Exists</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Because Texas—and the entire U.S.—is entering a generational shift:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">Multifamily demand is surging</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">Commercial owners need professional management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">Investors need transparent, PE-style operations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">Government agencies require compliant, reliable facility management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">Institutional buyers are moving down-market into 10–100 unit buildings</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-star-600 mr-3">•</span>
                    <span className="text-gray-700">AI will reduce white-collar opportunities, increasing the value of real assets</span>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-star-600 p-6">
                  <p className="text-gray-700 mb-3 font-semibold">Blue Star Property Management is designed to capture this shift by offering a single operational platform with:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Property management</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Tenant lifecycle management</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Maintenance coordination</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Financial reporting + budgeting</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Insurance + risk support</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Capital project oversight</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-star-600 font-bold mr-3">✔</span>
                      <span className="text-gray-700">Government-compliant processes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Differentiators */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">6. Strategic Differentiators</h3>
                <div className="space-y-6">
                  <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6">
                    <h4 className="text-lg font-bold text-indigo-800 mb-3">A. Built inside a private-equity ecosystem</h4>
                    <p className="text-gray-700 mb-3">Backed by BSEG, BSPM benefits from:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-3">•</span>
                        <span>Shared financial systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-3">•</span>
                        <span>Internal insurance brokerage (BSHI)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-3">•</span>
                        <span>Internal hard-money lending through FinCo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-3">•</span>
                        <span>Internal property acquisition partners</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6">
                    <h4 className="text-lg font-bold text-teal-800 mb-3">B. Multifamily and commercial only</h4>
                    <p className="text-gray-700 mb-3">We do not manage single-family rentals. This creates:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-3">•</span>
                        <span>Higher margins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-3">•</span>
                        <span>Less churn</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-3">•</span>
                        <span>More predictable clients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-3">•</span>
                        <span>Institutional-quality processes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6">
                    <h4 className="text-lg font-bold text-cyan-800 mb-3">C. Transparent, investor-grade reporting</h4>
                    <p className="text-gray-700 mb-3">Owners receive:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-cyan-600 mr-3">•</span>
                        <span>Monthly financials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-600 mr-3">•</span>
                        <span>NOI optimization reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-600 mr-3">•</span>
                        <span>CapEx forecasts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-600 mr-3">•</span>
                        <span>Performance dashboards</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-3">D. Insurance-backed risk mitigation</h4>
                    <p className="text-gray-700 mb-3">Because BSHI is in-house, we ensure:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-3">•</span>
                        <span>Correct coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-3">•</span>
                        <span>Fast claims support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-3">•</span>
                        <span>Lower liability exposure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-rose-50 border-l-4 border-rose-600 p-6">
                    <h4 className="text-lg font-bold text-rose-800 mb-3">E. Compliance-ready government service</h4>
                    <p className="text-gray-700 mb-3">We target:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 ml-6">
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>Federal</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>State</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>County</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>City</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>School district</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span>Utility districts</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3 font-semibold">This opens the door to large, multi-year public contracts.</p>
                  </div>
                </div>
              </div>

              {/* 5-7 Year Business Plan */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  7. 5–7 Year Business Plan
                </h3>

                {/* Year 1-2 */}
                <div className="mb-6 border-l-4 border-yellow-500 bg-yellow-50 p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Year 1–2: Foundation & Internal Portfolio</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Manage first 1–3 internally owned multifamily buildings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Build processes: reporting, maintenance flow, financial systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Begin external client onboarding (small multifamily)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Develop reputation via high-touch service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Establish relationships with real estate investors and flippers</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div><span className="font-semibold">Revenue Target:</span> $20K–$40K/year</div>
                      <div><span className="font-semibold">Profit Margin:</span> 60–70%</div>
                    </div>
                  </div>
                </div>

                {/* Year 3-4 */}
                <div className="mb-6 border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Year 3–4: Scaling with Apartments + Commercial</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Add 8–20 unit multifamily clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Add 1–3 commercial properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Hire part-time admin support (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Create standardized owner dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Begin capital project oversight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span>Build municipal/government RFP capability</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div><span className="font-semibold">Revenue Target:</span> $110K–$190K/year</div>
                      <div><span className="font-semibold">Profit Margin:</span> 55–65%</div>
                    </div>
                  </div>
                </div>

                {/* Year 5-6 */}
                <div className="mb-6 border-l-4 border-green-500 bg-green-50 p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Year 5–6: Regional Expansion</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Manage 150–300 units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Add 2–3 apartment complexes (20–60 units each)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Expand into commercial management (offices & retail)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Add full-time operations assistant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      <span>Strengthen government contracting relationships</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div><span className="font-semibold">Revenue Target:</span> $185K–$380K/year</div>
                      <div><span className="font-semibold">Profit Margin:</span> 50–60%</div>
                    </div>
                  </div>
                </div>

                {/* Year 7 */}
                <div className="mb-6 border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Year 7: Midsize Regional Management Firm</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      <span>300–450 units under management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      <span>5–10 commercial properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      <span>Multiple government contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      <span>NOI performance systems fully automated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      <span>Potential expansion into facilities management</span>
                    </li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div><span className="font-semibold">Revenue Target:</span> $425K–$675K/year</div>
                      <div><span className="font-semibold">Profit Margin:</span> 45–55% (industry standard at scale)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Projection */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Financial Projection (Based on Multifamily + Commercial Mix)
                </h3>

                {/* Fee Structure */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-4">Fee Structure</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-star-700 to-blue-star-900 text-white">
                          <th className="px-6 py-4 text-left font-bold">Service</th>
                          <th className="px-6 py-4 text-left font-bold">Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4">Multifamily PM Fee</td>
                          <td className="px-6 py-4 font-semibold">7–10% of gross rent</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4">Apartment Complex PM Fee</td>
                          <td className="px-6 py-4 font-semibold">4–7%</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4">Commercial PM Fee</td>
                          <td className="px-6 py-4 font-semibold">3–6%</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4">Leasing Fee</td>
                          <td className="px-6 py-4 font-semibold">50–100% of 1 month rent</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4">Renewal Fee</td>
                          <td className="px-6 py-4 font-semibold">$150–$300</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4">Maintenance Management</td>
                          <td className="px-6 py-4 font-semibold">10–15% markup</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4">Project Oversight</td>
                          <td className="px-6 py-4 font-semibold">5–10% of project cost</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Revenue Projection Summary */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-star-700 mb-4">Revenue Projection Summary</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-star-700 to-blue-star-900 text-white">
                          <th className="px-6 py-4 text-left font-bold">Year</th>
                          <th className="px-6 py-4 text-left font-bold">Units Managed</th>
                          <th className="px-6 py-4 text-left font-bold">Annual Revenue</th>
                          <th className="px-6 py-4 text-left font-bold">Net Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">1</td>
                          <td className="px-6 py-4">6–12</td>
                          <td className="px-6 py-4">$7K–$15K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$5K–$10K</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4 font-semibold">2</td>
                          <td className="px-6 py-4">15–25</td>
                          <td className="px-6 py-4">$22K–$36K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$15K–$25K</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">3</td>
                          <td className="px-6 py-4">40–60</td>
                          <td className="px-6 py-4">$65K–$95K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$45K–$70K</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4 font-semibold">4</td>
                          <td className="px-6 py-4">90–150</td>
                          <td className="px-6 py-4">$110K–$190K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$75K–$130K</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">5</td>
                          <td className="px-6 py-4">150–225</td>
                          <td className="px-6 py-4">$185K–$300K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$125K–$210K</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-gray-50">
                          <td className="px-6 py-4 font-semibold">6</td>
                          <td className="px-6 py-4">225–300</td>
                          <td className="px-6 py-4">$280K–$380K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$180K–$260K</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">7</td>
                          <td className="px-6 py-4">300–450</td>
                          <td className="px-6 py-4">$425K–$675K</td>
                          <td className="px-6 py-4 font-semibold text-green-700">$275K–$450K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Operational Structure */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Operational Structure (Years 1–7)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">Years 1–3</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Managed entirely by Howard & Daron</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Software-driven processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>Minimal overhead</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>High profit margins</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-3">Years 4–7</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Add part-time → full-time assistant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Add maintenance coordination software</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">•</span>
                        <span>Begin structured vendor network</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cross-Ecosystem Synergies */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  Cross-Ecosystem Synergies
                </h3>
                <div className="space-y-6">
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-3">🔹 Blue Star Heritage Insurance</h4>
                    <p className="text-gray-700 mb-2">Every client becomes an insurance opportunity for:</p>
                    <div className="grid grid-cols-2 gap-2 text-gray-700 ml-6">
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Property coverage</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Liability</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Umbrella</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Commercial packages</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">🔹 Blue Star FinCo</h4>
                    <p className="text-gray-700 mb-2">Provides:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 ml-6">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Renovation loans</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Acquisition capital</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Emergency repair financing</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Bridge loans</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Hard-money lending</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-3">🔹 Blue Star Property Holdings</h4>
                    <p className="text-gray-700 mb-2">When real estate is acquired internally:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>BSPM manages it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>BSHI insures it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>FinCo finances it</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3 font-semibold">This creates a closed wealth loop.</p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-3">🔹 Blue Star Pension Trust</h4>
                    <p className="text-gray-700">Uses high cash value life insurance to protect long-term earnings from:</p>
                    <ul className="space-y-2 text-gray-700 ml-6 mt-2">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Management fees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>NOI participation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Property equity stakes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* One-Sentence Summary */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-yellow-500 mr-3">⭐</span>
                  One-Sentence Summary of This Whole Strategy
                </h3>
                <div className="bg-gradient-to-r from-blue-star-600 to-blue-star-800 text-white p-8 rounded-xl text-center">
                  <p className="text-xl leading-relaxed font-medium">
                    Blue Star Property Management is the operational engine that turns real estate ownership into consistent, predictable, and scalable cash flow across the entire Blue Star ecosystem.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-center pt-6 border-t">
                <button
                  onClick={() => setShowPropertyMgmtModal(false)}
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
