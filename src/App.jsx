import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default App;
