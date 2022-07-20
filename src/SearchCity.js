import React from 'react';

export default function SearchCity() {
  return (
    <form style={{ display: 'flex', alignItems: 'baseline' }}>
      <div style={{ width: '90%' }}>
        <input type="text" className="city_search" placeholder="Search..." />
      </div>
      <div style={{ width: '10%' }}>
        <button type="submit" className="btn">
          ok
        </button>
      </div>
    </form>
  );
}
