import React, { useState } from 'react';

export default function Form(props) {
  const { setTimeMin, setTimeMax, setDate, checkForConflicts } = props;
  return (
    <form onSubmit={(event) => checkForConflicts(event)}>
      <label>
        Date
        <input
          type="date"
          id="date"
          required
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        Start Time
        <input
          type="time"
          id="minTime"
          required
          onChange={(event) => {
            setTimeMin(event.target.value);
            console.log(event.target.value);
          }}
        />
      </label>
      <label>
        End Time
        <input
          type="time"
          id="maxTime"
          required
          onChange={(event) => setTimeMax(event.target.value)}
        />
      </label>
      <button type="submit" id="check">
        Check for Conflicts
      </button>
    </form>
  );
}
