import React, { useState, useEffect } from 'react';

function App({Component, pageProps}) {
    const [counter, setCounter] = useState(0);
    
    return ( 
        <>
            <h1 onClick={() => setCounter(counter++)}>{counter}</h1>
            <Component {...pageProps} /> {/* mandamos un estado persistente en cada página */}
        </>
     );
}

export default App;