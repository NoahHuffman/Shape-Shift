import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/generate', { prompt });
        setResponse(res.data.response);
    };

    return (
        <div>
            <h1>Google Gemini LLM with FastAPI</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here"
                />
                <button type="submit">Generate</button>
            </form>
            <h2>Response:</h2>
            <p>{response}</p>
        </div>
    );
}

export default App;
