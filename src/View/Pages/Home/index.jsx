import React from 'react'
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Health from '../../Components/Health';
import Medshop from '../../Components/MedshopSection';
import Product from '../../Components/Product';
import DiscountsProducts from '../../Components/DiscountsProducts';
import Footer from '../../Components/Footer';

function Home() {
    return (
      <div style={{textAlign: 'center', minHeight: '100vh', width: '100% '}}>
        <Header/>
        <Banner/>
        <Health/>
        <Medshop/>
        <Product/>
        <DiscountsProducts/>
        <Footer/>
      </div>
    );
  }
  

export default Home