import React from 'react';
import { sections } from '@/constants';

export default function Backgrounds({ currentSection }: { currentSection: number}) {
    return (
      <div className="Backgrounds">
        {sections.map((section, i) => (
          <div className={`Backgrounds__background Backgrounds__background--${section} ${currentSection >= i ? 'Backgrounds__background--active' : ''}`} key={i} />
        ))}
      </div>
    );
}
