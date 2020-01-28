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

  .first-column {
    width: 25%;
  }

  .second-column {
    width: 40%;
  }

  .third-column {
    width: 16%;
  }

  .image {
    height: auto;
    width: 70%;
  }
`;

const Machines = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns is-8 is-multiline">
        <div className="column is-3 has-text-centered">
          <h1 className="subtitle is-4 has-text-danger has-text-light">
            SPECIFICATIONS
          </h1>
          <img src={data.machineImage.file.url} alt={data.machineImage.title} />
        </div>
        <div className="column">
          <h1 className="title is-5 has-text-danger">
            MODEL: ECOVEND<span>{data.machineName}</span>
          </h1>
          <table className="table  is-fullwidth is-striped">
            <thead>
              <tr>
                <th className="first-column"></th>
                <th className="second-column"></th>
                <th className="third-column"></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className="subtitle is-6">LOCATION:</h1>
                </td>
                <td>
                  <p className="subtitle is-6">{data.location}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">DIMENSIONS::</h1>
                </th>
                <td>
                  {data.dimensions.map(items => (
                    <p className="subtitle is-6">{items}</p>
                  ))}
                </td>
                <td>
                  <h1 className="subtitle is-6">SCREEN SIZE:</h1>
                </td>
                <td>
                  {data.screenSize.map(items => (
                    <p className="subtitle is-6">{items}</p>
                  ))}
                </td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">TOUCH SCREEN:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.touchScreen}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">REWARD SYSTEM:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.rewardsSystems}</p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">MATERIAL TYPES:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.materialTypes}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">CAPACITY:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.capacity}</p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">AUTOMATION:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.automation}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">MAX CONTAINER SIZE:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.maxContainerSize}</p>
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
                    {data.materialSortingCompaction}
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
                  <p className="subtitle is-6">{data.outputs}</p>
                </td>
              </tr>
              <tr className="is-selected">
                <th>
                  <h1 className="subtitle is-6">REPORTING:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.reporting}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">POWER SUPPLY:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.powerSupply}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">Productivity:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.productivity}</p>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <h1 className="subtitle is-6">IP RATING:</h1>
                </th>
                <td>
                  <p className="subtitle is-6">{data.ipRating}</p>
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
