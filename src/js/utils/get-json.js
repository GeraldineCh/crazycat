'use strict';

const getJSON = (extension, cb) => {
  const url = 'http://test-ta.herokuapp.com/' + extension;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

const postJSON = (extension, body, cb) => {
  const url = 'http://test-ta.herokuapp.com/' + extension;
  const xhr = new XMLHttpRequest();

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      cb(this.responseText);
    }else {
      console.log('No se puede acceder a la informacion');
    }
  };

  xhr.send(JSON.stringify(body));
};
