import { useState, useEffect } from "react";

import { IntlProvider, FormattedMessage, } from "react-intl"

import "./App.css";

const messages = {
  'tr-TR': {
    title: "Merhaba Dünya",
    description: '{count} Yeni Mesajınız Var !!!'
  },
  'en-US': {
    title: "Hello World ",
    description: 'You have {count} new messages !!!'
  }
}

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language
  // Tarayicinizi varsayilan ol. dilini bize getirir. Direkt console.log(defaultLocale) dersek getirir.
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider local={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 3 }} />

        </p>



        <br />
        <br />


        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
