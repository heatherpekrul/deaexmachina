import React from 'react';

const Specs = () => {
  return (
    <section className="app__specs container">
      <h1>PC Specs</h1>
      <table>
        <tbody>
          <tr>
            <th>CPU</th>
            <td>Core i7 4770K</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>PNY XLR8 24GB</td>
          </tr>
          <tr>
            <th>Motherboard</th>
            <td>MSI Z97-G43 Gaming</td>
          </tr>
          <tr>
            <th>GPU</th>
            <td>Gigabyte GTX 1080</td>
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