<div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
    <h1>Generate SQL</h1>
    <p>This is a web-based application designed to simplify the process of creating and managing SQL queries. With a user-friendly interface, this tool helps users generate SQL queries from natural language descriptions, making it easier to interact with databases without needing extensive SQL knowledge.</p>

  <h2 style="font-size: 22px; font-weight: bold;">Features</h2>
    <ul>
        <li><strong>Natural Language to SQL Conversion</strong>: Convert descriptive queries into SQL statements seamlessly.</li>
        <li><strong>Interactive Interface</strong>: User-friendly interface with a clean design for ease of use.</li>
        <li><strong>Error Handling</strong>: Displays relevant error messages for invalid queries.</li>
    </ul>
   <img src="docs/Project-ss.jpg" alt="Project screenshot">
   <h2 style="font-size: 22px; font-weight: bold;">Installation</h2>

  <h3 style="font-size: 20px; font-weight: bold;">Prerequisites</h3>
    <ul>
        <li>Node.js (>= 16.x)</li>
        <li>npm (>= 7.x)</li>
        <li>Vite (for development)</li>
    </ul>

   <h3 style="font-size: 20px; font-weight: bold;">Clone the Repository</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;"><code>git clone https://github.com/Manjunathhs-0003/Generate-SQL.git
cd Generate-SQL
</code></pre>

  <h3 style="font-size: 20px; font-weight: bold;">Setup</h3>
    <ol>
        <li><strong>Install Dependencies</strong>
            <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;"><code>npm install
</code></pre>
        </li>
        <li><strong>Create a .env File</strong>
            <p>Copy the example environment file and set up your OpenAI API key.</p>
            <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;"><code>cp .env.example .env
</code></pre>
            <p>Add your OpenAI API key in the .env file:</p>
            <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;"><code>OPENAI_API_KEY=your_openai_api_key_here
</code></pre>
        </li>
        <li><strong>Run the Development Server</strong>
            <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;"><code>npm run dev
</code></pre>
            <p>The application will be accessible at <a href="http://localhost:3000">http://localhost:3002</a>.</p>
        </li>
    </ol>

   <h2 style="font-size: 22px; font-weight: bold;">Usage</h2>
    <ul>
        <li><strong>Enter Query Description</strong>: Provide a natural language description of the query you need.</li>
        <li><strong>Generate SQL</strong>: Click the "Generate" button to see the SQL query generated based on your description.</li>
        <li><strong>Submit</strong>: Use the generated SQL query for your database operations.</li>
    </ul>

   <h2 style="font-size: 22px; font-weight: bold;">Acknowledgements</h2>
    <ul>
        <li><a href="https://openai.com/api" style="color: #007bff; text-decoration: none;">OpenAI API</a> for the powerful natural language processing capabilities.</li>
        <li><a href="https://vitejs.dev/" style="color: #007bff; text-decoration: none;">Vite</a> for fast and optimized development.</li>
    </ul>
</div>
