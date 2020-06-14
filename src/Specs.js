import React from 'react';

const Specs = () => {
  return (
    <section className="app__specs container">
      <h1>Specs</h1>
      <table>
        <tbody>
          <tr>
            <th>CPU</th>
            <td>Core i7 3770K</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>PNY XLR8 2x8GB</td>
          </tr>
          <tr>
            <th>Motherboard</th>
            <td>ASRock B75M-ITX</td>
          </tr>
          <tr>
            <th>GPU</th>
            <td>Asus GTX 1070</td>
          </tr>
          <tr>
            <th>Keyboard</th>
            <td>Corsair K70 RGB</td>
          </tr>
          <tr>
            <th>Mouse</th>
            <td>Logitech M510</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Specs;