const API_KEY = 'AIzaSyCqPZ5yFsQIXcMRWCDY33Ft_rjl-19jDXQ';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const googleGeminiService = {
  generateContent: async (prompt) => {
    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  }
};

export default googleGeminiService;