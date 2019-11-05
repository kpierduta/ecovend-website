import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Properties from './Properties';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .subtitle.is-5 {
    margin: 4rem 0rem;
  }
  .text {
    font-size: ${theme.fontSizeMedium};
    color: ${theme.secondaryColor};
    padding-right: 1rem;
    line-height: unset;
    margin-bottom: 0px;
  }
  .is-4 {
    margin: 5rem 0rem;
  }
  span {
    color: ${theme.secondaryColor};
  }
  .icon {
    padding-left: 1rem;
    color: #ffff;
  }
  .button {
    margin-top: 2rem;
    font-family: ${theme.primaryFontFamily};
    color: #fff;
    background-color: ${theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${theme.secondaryColor};
      color: #fff;
      opacity: 0.6;
    }
  }
  .end {
    padding-bottom: 0.25rem;
    margin-bottom: 0.75rem;
    border-bottom: 2px solid ${theme.secondaryColor} !important;
  }
`;

const Machines = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-7">
          {/** ** **************** first machine ************************************ */}
          <h1 className="subtitle is-5">
            <span>SPECIFICATIONS - </span>MODEL: ECOVEND RVM 100/200/300
          </h1>
          <Properties
            value="LOCATION:"
            description="internal or external (under cover)"
          />
          <div className="columns is-gapless">
            <div className="column is-3">
              <h1 className="subtitle text">DIMENSIONS:</h1>
            </div>
            <div className="column is-6">
              <p>RVM 100 1850 (H) x 650 (W) x 850mm (D)</p>
              <p>RVM 100 1850 (H) x 650 (W) x 850mm (D)</p>
              <p>RVM 300 1850 (H) x 1100 (W) x 950mm (D)</p>
            </div>
            <div className="column IS-3">
              <h1 className="subtitle text">SCREEN SIZE:</h1>
            </div>
            <div className="column">
              <p>10in</p>
              <p>21in</p>
              <p>19in</p>
            </div>
          </div>
          <Properties
            value="TOUCH SCREEN"
            description="simple and intuitive user operation"
          />
          <div className="end">
            <Properties
              value="REWARD SYSTEM:"
              description="paper token (electronic / app system pending)"
            />
          </div>
          <Properties
            value="MATERIAL TYPES:"
            description="plastic bottles & aluminium cans (glass - pending)"
          />
          <Properties
            value="CAPACITY:"
            description="RVM 100 - 200 bottles or 300 cans (single chamber for a single
              material or two materials co-mingled)"
          />
          <Properties
            value="AUTOMATION:"
            description=" barcode and weight sensors to accept only empty beverage
            containers automatically verified against the EcoVend database of
            60,000 legitimate barcodes"
          />
          <Properties value="MAX CONTAINER SIZE:" description="3 litres" />
          <Properties
            value="MATERIAL SORTING & COMPACTION:"
            description="two integral compactor units, one for each material type"
          />
          <Properties
            value="OUTPUTS:"
            description="full description of each container for macro or micro analysis"
          />
          <div className="end">
            <Properties
              value="REPORTING:"
              description="full description of each container for macro or micro analysis"
            />
          </div>
          <Properties value="POWER SUPPLY:" description="13 amp" />
          <Properties
            value="PRODUCTIVITY:"
            description="up to 30 unites per min"
          />
          <Properties value="IP RATING:" description="IP53" />
          <button type="submit" className="button is-rounded is-medium">
            ENQUIRY
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
        <div className="column is-5 has-text-centered">
          <h1 className="subtitle is-4">
            <span>MODEL: ECOVEND RVM 100/200/300 </span>
          </h1>
          <img
            src="/images/machines/ecovend-machine_100-200-300.png"
            alt="recycle machine"
          />
        </div>
        <div className="column is-5 has-text-centered">
          <h1 className="subtitle is-4">
            <span>MODEL: ECOVEND RVM 350 </span>
          </h1>
          <img
            src="/images/machines/ecovend-machine_350.png"
            alt="recycle machine"
          />
        </div>
        <div className="column  ">
          <h1 className="subtitle is-5">
            {/* ******************** second machine ******************* */}
            <span>SPECIFICATIONS -</span> MODEL: ECOVEND 350
          </h1>
          <Properties
            value="LOCATION:"
            description="internal or external (under cover)"
          />
          <Properties
            value="DIMENSIONS:"
            description="1900 (H) x 1450 (W) x 1100mm (D)"
          />
          <Properties value="SCREEN SIZE:" description="32in" />
          <Properties
            value="TOUCH SCREEN"
            description="simple and intuitive user operation"
          />
          <div className="end">
            <Properties
              value="REWARD SYSTEM:"
              description="paper token (electronic / app system pending)"
            />
          </div>
          <Properties
            value="MATERIAL TYPES:"
            description="plastic bottles & aluminium cans (glass - pending)"
          />
          <Properties
            value="CAPACITY:"
            description="400 bottles and 600 cans"
          />
          <Properties
            value="AUTOMATION:"
            description=" barcode and weight sensors to accept only empty beverage
            containers automatically verified against the EcoVend database of
            60,000 legitimate barcodes"
          />
          <Properties value="MAX CONTAINER SIZE:" description="3 litres" />
          <Properties
            value="MATERIAL SORTING & COMPACTION:"
            description="two integral compactor units, one for each material type"
          />
          <Properties
            value="OUTPUTS:"
            description="segregated materials compacted Into split chambers - cleanest loop
            recycling"
          />
          <div className="end">
            <Properties
              value="REPORTING:"
              description="full description of each container for macro or micro analysis"
            />
          </div>
          <Properties value="POWER SUPPLY:" description="13 amp" />
          <Properties
            value="PRODUCTIVITY:"
            description="up to 30 unites per min"
          />
          <Properties value="IP RATING:" description="IP40" />
          <button type="submit" className="button is-rounded is-medium">
            ENQUIRY
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
        <div className="column is-7">
          {/* ******************** third machine ******************* */}
          <h1 className="subtitle is-5">
            <span>SPECIFICATIONS -</span>MODEL: ECOVEND RVM 400
          </h1>
          <Properties
            value="LOCATION:"
            description="internal or external (under cover)"
          />
          <Properties
            value="DIMENSIONS:"
            description="1900 (H) x 1270 (W) x 1020mm (D)
            (smaller footprint versions available)"
          />
          <Properties value="SCREEN SIZE:" description="55in" />
          <Properties
            value="TOUCH SCREEN"
            description="simple and intuitive user operation"
          />
          <div className="end">
            <Properties
              value="REWARD SYSTEM:"
              description="paper token (electronic / app system pending)"
            />
          </div>
          <Properties
            value="MATERIAL TYPES:"
            description="plastic bottles & aluminium cans (glass - pending)"
          />
          <Properties value="CAPACITY:" description="500 bottles or 700 cans" />
          <Properties
            value="AUTOMATION:"
            description=" barcode and weight sensors to accept only empty beverage
            containers automatically verified against the EcoVend database of
            60,000 legitimate barcodes"
          />
          <Properties value="MAX CONTAINER SIZE:" description="3 litres" />
          <Properties
            value="MATERIAL SORTING & COMPACTION:"
            description="two integral compactor units, one for each material type"
          />
          <Properties
            value="OUTPUTS:"
            description="segregated materials compacted Into split chambers - cleanest loop
            recycling"
          />
          <div className="end">
            <Properties
              value="REPORTING:"
              description="full description of each container for macro or micro analysis"
            />
          </div>
          <Properties value="POWER SUPPLY:" description="13 amp" />
          <Properties
            value="PRODUCTIVITY:"
            description="up to 30 unites per min"
          />
          <Properties value="IP RATING:" description="IP40" />
          <button type="submit" className="button is-rounded is-medium">
            ENQUIRY
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
        <div className="column is-5 has-text-centered">
          <h1 className="subtitle is-4">
            <span>MODEL: ECOVEND RVM 400 </span>
          </h1>
          <img
            src="/images/machines/ecovend-machine_400.png"
            alt="Recycling Machine"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Machines;
