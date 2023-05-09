import React, { useState, useEffect } from 'react';
import './Popup.css';
import Form from './Form';

const Popup = () => {
  // Set the initial state of the date and time
  let [timeMin, setTimeMin] = useState('');
  let [timeMax, setTimeMax] = useState('');
  let [date, setDate] = useState('');
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const APIKEY = 'AIzaSyCSto199ve_xlGI3Bys5Gb0pXiJalZUUfw';
  let accessToken = '';

  // Convert the selected date and time to UTC
  function convertToUTC(dateString, timeZone) {
    const date = new Date(dateString);
    const timezoneOffset =
      new Date(date.toLocaleString('en-US', { timeZone })).getTimezoneOffset() *
      60000;
    const utcDate = new Date(date.getTime() + timezoneOffset);
    return utcDate.toISOString();
  }

  // Set the API request parameters from the selected date and time
  useEffect(() => {
    chrome.identity
      .getAuthToken({ interactive: true })
      .then((token) => {
        accessToken = token.token;
      })
      .catch((error) => console.error(error));
  });

  // Make the API call to check for conflicts
  async function checkForConflicts() {
    timeMin = convertToUTC(`${date} ${timeMin}`, timeZone);
    timeMax = convertToUTC(`${date} ${timeMax}`, timeZone);
    console.log(timeMin, 'timeMin');
    console.log(timeMax, 'timeMax');
    const apiUrl = `https://www.googleapis.com/calendar/v3/freeBusy/?key=${APIKEY}`;
    // Set the API request parameters
    const requestBody = {
      timeMin: timeMin,
      timeMax: timeMax,
      items: [{ id: 'primary' }],
    };
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + accessToken);
    headers.append('Content-Type', 'application/json');
    await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => console.log(data, 'data'))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div class="header">
        <h1>Conflict Manager</h1>
        <p>Choose a date and time to check for conflicts:</p>
      </div>
      <Form
        checkForConflicts={checkForConflicts}
        setTimeMin={setTimeMin}
        setTimeMax={setTimeMax}
        setDate={setDate}
      />
      <p id="result"></p>
    </div>
  );
};

export default Popup;
