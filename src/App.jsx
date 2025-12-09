import React from 'react';

function App() {
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
      <section id="divisions" className="section-container bg-gradient-to-br from-blue-star-50 to-white">
        <h2 className="section-title text-center mb-16">The Five Pillars of Blue Star</h2>

        <div className="space-y-8">
          {/* Division 1 - BSHI */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-start">
              <div className="bg-blue-star-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-2xl font-bold text-blue-star-700">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Blue Star Heritage Insurance (BSHI)</h3>
                <p className="text-gray-600 mb-4 italic">The Foundation of Recurring Revenue</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specializing In:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Home & Auto
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Commercial Properties
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Landlord Policies
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Investor Portfolios
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Contractors & Builders
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Hard-Money Lending Packages
                    </div>
                  </div>
                </div>

                <div className="bg-blue-star-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Insurance is the Foundation:</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>✓ Recurring revenue</div>
                    <div>✓ Predictable cash flow</div>
                    <div>✓ Compounding renewals</div>
                    <div>✓ High-margin business</div>
                    <div>✓ Cross-sells across divisions</div>
                    <div>✓ Low capital requirement</div>
                    <div>✓ Immediate credibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Division 2 - Property Holdings */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-start">
              <div className="bg-blue-star-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-2xl font-bold text-blue-star-700">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Blue Star Property Holdings</h3>
                <p className="text-gray-600 mb-4 italic">Building Long-Term Equity</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Investment Strategies:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> BRRRR rentals
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Long-term holds
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Fix-and-flip partnerships
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Private equity RE deals
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> New construction partnerships
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Distressed property acquisition
                    </div>
                  </div>
                </div>

                <div className="bg-blue-star-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Why This Matters:</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>✓ Builds long-term equity</div>
                    <div>✓ Tax advantages</div>
                    <div>✓ Consistent net worth growth</div>
                    <div>✓ Collateral for FinCo</div>
                    <div>✓ Passive income foundation</div>
                    <div>✓ Long-term appreciation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Division 3 - FinCo */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border-2 border-blue-star-200">
            <div className="flex items-start">
              <div className="bg-blue-star-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Blue Star FinCo</h3>
                <p className="text-gray-600 mb-4 italic">Private Lending & High Returns</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Lending Services (Launch: Year 3-4):</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Hard-money loans (12-14% + points)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Bridge loans
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Flip financing
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Construction draws
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Equipment loans
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Rental acquisition loans
                    </div>
                  </div>
                </div>

                <div className="bg-blue-star-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">The FinCo Advantage:</h4>
                  <div className="space-y-2 text-sm">
                    <div>✓ HIGH profit with LOW workload</div>
                    <div>✓ Require borrowers to use BSHI (double revenue)</div>
                    <div>✓ Finance deals that we ALSO insure</div>
                    <div>✓ Earn both interest + insurance commissions</div>
                    <div>✓ Choose only collateralized, low-risk deals</div>
                  </div>
                  <p className="mt-4 text-xs text-gray-600 italic">
                    Note: FinCo launches only when BSHI cash flow can support it responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Division 4 - Property Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-start">
              <div className="bg-blue-star-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-2xl font-bold text-blue-star-700">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Blue Star Property Management</h3>
                <p className="text-gray-600 mb-4 italic">Recurring Revenue from Every Rental</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Blue Star-owned rentals
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> External landlord properties
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Tenant placement
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Maintenance coordination
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Rent collection
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-blue-star-500 mr-2">•</span> Owner reporting
                    </div>
                  </div>
                </div>

                <div className="bg-blue-star-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Strategic Benefits:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>✓ Every rental = recurring revenue</div>
                    <div>✓ Control expenses and quality</div>
                    <div>✓ Landlord client retention</div>
                    <div>✓ Perfect fit with BSHI policies</div>
                    <div>✓ Passive profitability</div>
                    <div>✓ Minimal staffing requirements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Division 5 - Pension Trust */}
          <div className="bg-gradient-to-br from-blue-star-600 to-blue-star-800 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="flex items-start">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-2xl font-bold text-blue-star-700">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Blue Star Pension Trust</h3>
                <p className="text-blue-star-100 mb-4 italic">Generational Wealth Engine (Launch: Years 5-7)</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Trust Structure:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Owns life insurance
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Accumulates cash value
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Owns real estate entities
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Receives profit distributions
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Legal asset protection
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Generational wealth transfer
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-star-300 mr-2">•</span> Tax-advantaged growth
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
                  <p className="text-xl font-bold mb-2">This ensures Blue Star isn't just a business—</p>
                  <p className="text-2xl font-bold">It's a 50-year family wealth machine.</p>
                </div>
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
    </div>
  );
}

export default App;
