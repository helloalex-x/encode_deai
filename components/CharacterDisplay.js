export default function CharacterDisplay({ characters }) {
    return (
      <div>
        <h2>Extracted Characters</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Personality</th>
            </tr>
          </thead>
          <tbody>
            {characters.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '8px' }}>No characters found.</td>
              </tr>
            ) : (
              characters.map((character, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{character.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{character.description}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{character.personality}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }