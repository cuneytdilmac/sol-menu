import React from 'react';
import './Market.css';

export default function Market() {
  return (
    <div className="market-container">
      <h1>Market Tablosu</h1>
      <table className="market-table">
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Fiyat</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elma</td>
            <td>5 TL</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Kivi</td>
            <td>10 TL</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Portakal</td>
            <td>4 TL</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
