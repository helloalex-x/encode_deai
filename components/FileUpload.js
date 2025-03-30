import { useState } from 'react';

export default function FileUpload({ onExtract }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleFileUpload = () => {
    if (!file) {
      alert('Please upload a file first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const extractedCharacters = extractCharacters(fileContent);
      onExtract(extractedCharacters);
    };
    reader.readAsText(file);
  };

  const extractCharacters = (text) => {
    // Lógica básica de extracción de personajes (aquí puedes hacer algo más complejo)
    const lines = text.split('\n');
    const personalities = [
      'Brave', 'Cunning', 'Mysterious', 'Friendly', 'Angry', 'Optimistic', 'Skeptical', 'Lazy', 'Generous'
    ];
    
    const characters = lines.map(line => {
      const [name, description] = line.split(':');
      if (name && description) {
        const personality = personalities[Math.floor(Math.random() * personalities.length)];
        return { name: name.trim(), description: description.trim(), personality };
      }
      return null;
    }).filter(character => character !== null);

    return characters;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Extract Characters</button>
    </div>
  );
}