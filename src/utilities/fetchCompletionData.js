export const fetchCompletionData = async (prompt, engine) => {
  let response = await fetch(
    `https://api.openai.com/v1/engines/${engine}/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(prompt),
    }
  );

  let data = await response.json();
  return data;
};
