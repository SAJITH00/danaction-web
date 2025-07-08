import React, { useState, useEffect } from 'react';
import DownTable from './DownTable';

function Chart() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Generate years from 1900 to current year + 10
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const endYear = currentYear ;
    const yearsArray = [];

    for (let year = endYear; year >= startYear; year--) {
      yearsArray.push(year);
    }

    setYears(yearsArray);
  }, []);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

 

  return (
    <>
<div className='d-flex justify-content-around mx-5 mt-4 '>    
      <div style={{fontFamily:"cursive",fontSize:"30px"}} >
          <label htmlFor="year" >
            Select Year  :
          </label>
          <select
            id="year"
            name="year"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

      </div>
      <div>
        <DownTable year={selectedYear} />
      </div>
    </>
  );
}

export default Chart;