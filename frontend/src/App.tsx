import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/client'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { DemoPage } from './pages/Demo'
import { HistoryPage } from './pages/History'
import { SettingsPage } from './pages/Settings'

function App() {
  console.log('App component is rendering')
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
