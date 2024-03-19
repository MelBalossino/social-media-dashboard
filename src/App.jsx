import Header from "./components/Header"
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContainer"

function App() {

  return (
    <main className="max-w-[1440px] relative mx-auto">
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
    </main>
  )
}

export default App
