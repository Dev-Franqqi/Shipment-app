import React from 'react';

const Translate = () => {
  return (
    <>
    <div className="gtranslate_wrapper"></div>
    <script>
      {`
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en", "fr", "de", "it", "es"],
        "wrapper_selector": ".gtranslate_wrapper"
      }
      `}
    </script>
    <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
    </>
      
  
  );
};

export default Translate;
