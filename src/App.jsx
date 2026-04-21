
import { Suspense } from 'react';
import './App.css'
import Banner from './assets/components/CodeFile/Banner'
import Navbar from './assets/components/CodeFile/Navbar'
import TicketContainer from './assets/components/TicketContainer';


const loadTicket = () => fetch("/tickets.json")
  .then((res) => res.json())

function App() {

  const ticketPromise = loadTicket();

  return (
    <>
      <Navbar></Navbar>
      <section>
        <Suspense fallback={"loading........"}>
          <TicketContainer promise={ticketPromise}></TicketContainer>
        </Suspense>
      </section>
    </>
  )
}

export default App
