import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import CharacterDisplay from '../components/CharacterDisplay';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  
  const handleExtractCharacters = (characters) => {
    setCharacters(characters);
  };

  return (
    <div>
      <h1>Storytelling App</h1>
      <FileUpload onExtract={handleExtractCharacters} />
      <CharacterDisplay characters={characters} />
    </div>
  );
}