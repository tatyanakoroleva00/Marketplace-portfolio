import React from "react";
import { loremIpsum } from "react-lorem-ipsum";

export default function HowToBecomeOurPartner() {
  return (
    <div>
      <div style={{fontWeight : 'bold', marginBottom: '2rem', fontSize: '2rem'}}> Cтать партнером</div>
      <div>
        {loremIpsum({p: 4, avgSentencesPerParagraph: 3, random: true, startWithLoremIpsum: false}).map(text => (
          <div style={{marginBottom: '1rem', textIndent: '2rem', lineHeight: '2rem'}} key={text}>{text}</div>
        ))}
      </div>
    </div>
  );
}
