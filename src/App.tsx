import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import type { mainType } from './types/mainType';
import Technology from './components/Technology';
import Footer from './components/Footer';

function App() {





  const stackPromise = async () : Promise<mainType[]> =>{
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  }



  return (    
   <div>
    <Nav></Nav>
    {/* <h1>denfewno</h1> */}

    <Banner></Banner>

    <Suspense fallback="Loading...">

    <Technology stackPromise={stackPromise()}></Technology>

    </Suspense>

    <Footer></Footer>

   </div>
  )
}

export default App
