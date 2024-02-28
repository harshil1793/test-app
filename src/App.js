import { VaAccordion, VaAccordionItem } from '@department-of-veterans-affairs/web-components/react-bindings';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  function handleLangUpdate(newLang) {
    setLang(newLang);
    console.log(lang)
  }
  return (
    <div className="App">
      <button className="lang-button" onClick={() => handleLangUpdate('en')}>en</button>
      <button className="lang-button" onClick={() => handleLangUpdate('es')}>es</button>
      <main id="main"  lang={lang}>
        <VaAccordion
          disable-analytics={{
            value: 'false'
          }}
          section-heading={{
            value: 'null'
          }}
          uswds
        >
          <VaAccordionItem
            header="First Amendment"
            id="first"
            uswds
          >
            <p>
              Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
            </p>
          </VaAccordionItem>
          <VaAccordionItem
            header="Second Amendment"
            id="second"
            uswds
          >
            <p>
              A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            </p>
          </VaAccordionItem>
          <VaAccordionItem
            header="Third Amendment"
            id="third"
            uswds
          >
            <p>
              No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
            </p>
          </VaAccordionItem>
        </VaAccordion>

        <va-accordion disable-analytics={{ value: 'false' }} section-heading={{ value: 'null' }} uswds>
        <va-accordion-item header="First Amendment" id="first" uswds>
          <p>
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise
            thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of grievances.
          </p>
        </va-accordion-item>
        <va-accordion-item header="Second Amendment" id="second" uswds>
          <p>
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep
            and bear Arms, shall not be infringed.
          </p>
        </va-accordion-item>
        <va-accordion-item header="Third Amendment" id="third" uswds>
          <p>
            No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time
            of war, but in a manner to be prescribed by law.
          </p>
        </va-accordion-item>
      </va-accordion>
      </main>
    </div>
  );
}

export default App;
