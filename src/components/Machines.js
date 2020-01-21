import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
  .table td,
  .table th {
    border: none;
  }
  .table.is-striped tbody tr:not(.is-selected):nth-child(odd) {
    background-color: #fafafa;
  }
  .table.is-striped tbody tr:not(.is-selected):nth-child(even) {
    background-color: #ffff !important;
  }
  .table tr.is-selected {
    background-color: #fde6d8 !important;
  }
  .main {
    width: 25%;
  }
  .content {
    width: 47%;
  }
  .image {
    height: auto;
    width: 70%;
  }
`;

const Machines = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-8 is-multiline">
        {/** ** **************** first machine ************************************ */}
        <div className="column is-3 has-text-centered">
          <h1 className="subtitle is-4 has-text-danger has-text-light">
            SPECIFICATIONS
          </h1>
          <img
            src="/images/machines/ecovend-machine_100-200-300.png"
            alt="recycle machine"
          />
        </div>
        <div className="column">
          <h1 className="title is-5 has-text-danger">
            MODEL: ECOVEND RVM 100/200/300
          </h1>
          <table className="table  is-fullwidth is-striped">
            <thead>
              <tr>
                <th className="main"></th>
                <th className="content"></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className="subtitle is-6">LOCATION:</h1>
                </td>
                <td>
                  <p className="subtitle is-6">
                    internal or external (under cover)
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">DIMENSIONS::</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    RVM 100 1850 (H) x 650 (W) x 850mm (D)
                  </p>
                  <p className="subtitle is-6">
                    RVM 100 1850 (H) x 650 (W) x 850mm (D)
                  </p>
                  <p className="subtitle is-6">
                    RVM 300 1850 (H) x 1100 (W) x 950mm (D)
                  </p>
                </td>
                <td>
                  <h1 className="subtitle is-6">SCREEN SIZE:</h1>
                </td>
                <td>
                  <p className="subtitle is-6">10 in</p>
                  <p className="subtitle is-6">21 in</p>
                  <p className="subtitle is-6">19in</p>
                </td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">TOUCH SCREEN:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    simple and intuitive user operation
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">REWARD SYSTEM:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    paper token (electronic / app system pending)
                  </p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">MATERIAL TYPES:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    plastic bottles & aluminium cans (glass - pending)
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">CAPACITY:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    "RVM 100 - 200 bottles or 300 cans (single chamber for a
                    single material or two materials co-mingled)
                  </p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">AUTOMATION:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    barcode and weight sensors to accept only empty beverage
                    containers automatically verified against the EcoVend
                    database of 60,000 legitimate barcodes"
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">MAX CONTAINER SIZE:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">3 litres</p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">
                    MATERIAL SORTING & COMPACTION:
                  </h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    two integral compactor units, one for each material type
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">OUTPUTS:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    full description of each container for macro or micro
                    analysis
                  </p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">REPORTING:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">
                    full description of each container for macro or micro
                    analysis
                  </p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">POWER SUPPLY:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">13 amp</p>
                </td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">Productivity:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">upto 30 units per min</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">IP RATING:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">IP53</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Container>
);

export default Machines;
