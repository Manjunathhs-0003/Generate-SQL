import openai from './api.js';
const generate = async (queryDescription) => {
  console.log(queryDescription);
  const message = [
    {
      role: 'system',
      content: `You are a translator from plain English to SQL.`,
    },
    {
      role: 'user',
      content: `Convert the following natural language description into a SQL query:\n\nShow all all the elements in the table users`,
    },
    { role: 'assistant', content: 'SELECT * FROM users;' },
    {
      role: 'user',
      content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
    },
  ];
  const response = await openai.chat.completions.create({
    messages: message,
    model: 'gpt-3.5-turbo',
    max_tokens: 1000,
    temperature: 0.5,
  });

  return response.choices[0].message.content;
};

export default generate;
