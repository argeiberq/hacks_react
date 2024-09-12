import React, { useState } from 'react';
import {Input } from "@chakra-ui/react"
import "./buscar.css"
export default function Buscar({informacion}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = informacion.filter((item) =>
    item.includes(searchTerm)
  );

  return (
    <div className='div'>
      <Input
        type="text"
        placeholder="buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     
      <ul>
        {filteredData.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

    </div>
  );
}
