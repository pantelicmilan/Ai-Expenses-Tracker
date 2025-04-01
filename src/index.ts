import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { McpUtilityLoader } from "./core/mcpUtilityLoader.js";
import { AddExpense } from "./tools/addExpense.tool.js";
import { AnalyzeBudget } from "./tools/analyzeBudget.tool.js";
import { ExpensesSummary } from "./resources/expenseSummary.resource.js";

const server = new McpServer({
  name: "Expense Manager",
  description:"Manage expenses very easy",
  version: "1.0.0"
});

const utilitiesLoader = new McpUtilityLoader(server)
utilitiesLoader.loadAllTools([new AddExpense(), new AnalyzeBudget()])
utilitiesLoader.loadAllResources([new ExpensesSummary()])

const transport = new StdioServerTransport();
await server.connect(transport);