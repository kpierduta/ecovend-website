import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .table td,
  .table th {
    border: none;
    padding: 1rem 0rem 1rem 1rem;
    line-height: 34px;
  }

  .table.is-striped tbody tr:not(.is-selected):nth-child(odd) {
    background-color: #fafafa;
  }

  .table.is-striped tbody tr:not(.is-selected):nth-child(even) {
    background-color: #ffff !important;
  }

  .table tr.is-selected {
    background-color: #fde6d8 !important;
    color: #000000 !important;
  }

  .table__wrapper {
    overflow-x: auto;
  }

  .panel-block {
    border: none;
  }

  .data {
    width: 100%;
  }

  .image {
    height: auto;
    width: 70%;
  }
`;

const Machines = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns is-multiline">
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
          <div className="panel">
            <div className="panel-block">
              <div className="data">
                <div className="table__wrapper">
                  <table className="table  is-fullwidth is-striped">
                    <tbody>
                      <tr>
                        <th>LOCATION:</th>
                        <td>{data.location}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>DIMENSIONS:</th>
                        <td>
                          {data.dimensions.map(items => (
                            <span>{items}</span>
                          ))}
                        </td>
                        <td>SCREEN SIZE:</td>
                        <td>
                          {data.screenSize.map(items => (
                            <span>{items}</span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <th>TOUCH SCREEN:</th>
                        <td>{data.touchScreen}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>REWARD SYSTEM:</th>
                        <td>{data.rewardsSystems}</td>
                      </tr>
                      <tr className="is-selected">
                        <th>MATERIAL TYPES:</th>
                        <td>{data.materialTypes}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>CAPACITY:</th>
                        <td>{data.capacity}</td>
                      </tr>
                      <tr className="is-selected">
                        <th>AUTOMATION:</th>
                        <td>{data.automation}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>MAX CONTAINER SIZE:</th>
                        <td>{data.maxContainerSize}</td>
                      </tr>
                      <tr className="is-selected">
                        <th>MATERIAL SORTING & COMPACTION:</th>
                        <td>{data.materialSortingCompaction}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>OUTPUTS:</th>
                        <td>{data.outputs}</td>
                      </tr>
                      <tr className="is-selected">
                        <th>REPORTING:</th>
                        <td>{data.reporting}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>POWER SUPPLY:</th>
                        <td>{data.powerSupply}</td>
                      </tr>
                      <tr>
                        <th>Productivity:</th>
                        <td>{data.productivity}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>IP RATING:</th>
                        <td>{data.ipRating}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Machines;
