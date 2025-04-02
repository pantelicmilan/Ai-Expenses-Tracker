# AI Expense Tracker MCP Server

The AI Expense Tracker MCP (Model Control Protocol) Server is an innovative solution that leverages Large Language Models (LLMs) to revolutionize expense tracking and financial analytics. This powerful system combines artificial intelligence with traditional expense management to provide intelligent insights and automated processing.

## Key Feature
- **Smart Categorization**: Learns from user patterns to accurately classify expenses
- **Natural Language Queries**: Allows users to ask questions about their expenses in plain English
- **Predictive Analytics**: Provides spending forecasts and budget recommendations based on historical data
- **Custom Report Generation**: Creates detailed expense reports with AI-powered insights

## How to run

**1. Install Node.js.**

**2. Run npm install in the root directory of the project to install dependencies.**

**3. Run the tsc command in the root directory to generate JavaScript files in the dist folder.**

**4. Open the MCP Client Software (excluding Claude) and paste the following form into the configuration file:**

```
{
  "mcpServers": { 
    "expenses-tracker": {
      "command": "node",
      "args": [
        "C:\\path...\\dist\\index.js"
      ]
    }
  }
}
```



## Technical Overview

The server utilizes state-of-the-art LLM technology to process and analyze expense data. It acts as a bridge between user inputs (receipts, queries, commands) and the AI models, providing a seamless experience for expense management.

## Benefits

- Reduced manual data entry
- More accurate expense categorization
- Deep insights into spending patterns
- Time-saving automation features
- Intelligent budget recommendations