import React from 'react';

const Specs = () => {
  return (
    <section className="app__specs container">
      <h1>PC Specs</h1>
      <table>
        <tbody>
          <tr>
            <th>CPU</th>
            <td>Core i7 12700K</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>Corsair Vengence 2x16GB </td>
          </tr>
          <tr>
            <th>Motherboard</th>
            <td>ASUS Z690-P Prime</td>
          </tr>
          <tr>
            <th>GPU</th>
            <td>RTX 2080ti FE</td>
          </tr>
          <tr>
            <th>Heatsink</th>
            <td>Scythe Fuma 2 Rev.B</td>
          </tr>
          <tr>
            <th>Keyboard</th>
            <td>Corsair K70 RGB</td>
          </tr>
          <tr>
            <th>Mouse</th>
            <td>Glorious Model O-</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Specs;