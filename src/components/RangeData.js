import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};

  .table {
    margin-top: 4rem;
    font-size: ${theme.fontSize};
  }
  .table th,
  .table td {
    border: none;
  }
  .table th {
    color: ${theme.secondaryColor};
    width: 25%;
  }
  .end {
    border-bottom: 1px solid;
  }
  .is-block {
    margin-top: 0.5rem;
  }
  .icon {
    margin-left: 0rem !important;
  }
`;

const RangeData = () => (
  <Container className="section">
    <div className="container">
      <h1 className="subtitle is-5">
        SPECIFICATIONS - MODEL: ECOVEND RVM 100/200/300
      </h1>
      <table className="table is-fullwidth">
        <tbody>
          <tr>
            <th>LOCATION:</th>
            <td>internal or external (under cover)</td>
          </tr>
          <tr>
            <th>DIMENSIONS:</th>
            <td>
              RVM 100 1850 (H) x 650 (W) x 850mm (D)
              <span className="is-block">
                RVM 200 1850 (H) x 850 (W) x 850mm (D)
              </span>
              <span className="is-block">
                RVM 300 1850 (H) x 1100 (W) x 950mm (D)
              </span>
            </td>
            <td>SCREEN SIZE:</td>
            <td>
              10in
              <span className="is-block">21in</span>
              <span className="is-block">19in</span>
            </td>
          </tr>
          <tr>
            <th>TOUCH SCREEN</th>
            <td>simple and intuitive user operation</td>
          </tr>
          <tr className="end">
            <th>REWARD SYSTEM:</th>
            <td> paper token (electronic / app system pending)</td>
            <td />
          </tr>
          <tr>
            <th>MATERIAL TYPES:</th>
            <td> plastic bottles & aluminium cans (glass - pending)</td>
            <td />
          </tr>
          <tr>
            <th>CAPACITY:</th>
            <td>
              RVM 100 - 200 bottles or 300 cans (single chamber for a single
              material or two materials co-mingled)
              <span className="is-block">
                RVM 200 - 250 bottles and 350 cans (segregated)
              </span>
              <span className="is-block">
                RVM 300 - 300 bottles and 400 cans (segregated)
              </span>
            </td>
          </tr>
          <tr>
            <th>AUTOMATION:</th>
            <td>
              barcode and weight sensors to accept only empty beverage
              containers automatically verified against the EcoVend database of
              60,000 legitimate barcodes
            </td>
          </tr>
          <tr>
            <th>MAX CONTAINER SIZE:</th>
            <td>3 litres</td>
          </tr>
          <tr>
            <th>MATERIAL SORTING & COMPACTION:</th>
            <td>two integral compactor units, one for each material type</td>
          </tr>
          <tr>
            <th>OUTPUTS:</th>
            <td>
              segregated materials compacted Into split chambers (models RVM 200
              and 300 only) - cleanest loop recycling
            </td>
          </tr>
          <tr className="end">
            <th>REPORTING:</th>
            <td>
              full description of each container for macro or micro analysis
            </td>
          </tr>
          <tr>
            <th>POWER SUPPLY:</th>
            <td>13 amp</td>
          </tr>
          <tr>
            <th>PRODUCTIVITY:</th>
            <td> up to 30 unites per min</td>
          </tr>
          <tr>
            <th>IP RATING:</th>
            <td> IP53</td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="button is-rounded is-medium">
        ENQUIRY
        <span className="icon">
          <i className="fas fa-chevron-right" />
        </span>
      </button>
    </div>
  </Container>
);

export default RangeData;
