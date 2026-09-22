
import './App.css'
import { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

const AccountsApp = lazy(() => import('accounts/App'))
const PaymentsApp = lazy(() => import('payments/App'))

function App() {
  return (
    <main className="shell">
      <header className="shell-header">
        <div>
          <p className="eyebrow">Micro Frontend Shell</p>
          <h1>Operations Console</h1>
        </div>
        <nav className="shell-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/accounts">Accounts</NavLink>
          <NavLink to="/payments">Payments</NavLink>
        </nav>
      </header>

      <section className="shell-content">
        <Suspense fallback={<p className="loading">Loading remote application...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounts/*" element={<AccountsApp />} />
            <Route path="/payments/*" element={<PaymentsApp />} />
          </Routes>
        </Suspense>
      </section>
    </main>
  )
}

function Home() {
  return (
    <div className="welcome-panel">
      <p className="eyebrow">Shell application</p>
      <h2>One entry point. Independent teams.</h2>
      <p>Choose a domain above to load its remote application through Module Federation.</p>
    </div>
  )
}

export default App
