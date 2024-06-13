import React, { Component, useState, useEffect } from 'react'
import PvvProductList from './components/PvvProductList';
import axios from "axios";

export default function App() {
  const [pvvProductList, setPvvProductList] = useState([]);

  const pvvGetstudent = async () => {
    try {
      const response = await axios.get("https://666a49867013419182cebdcf.mockapi.io/api/pvv1/pvvStudent");
      setPvvProductList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pvvGetstudent();
  }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>xuwr lys chuc nang crud -hook -api</h1>
      <hr />
      <PvvProductList renderPvvProductList={pvvProductList} />
    </div>
  )
}