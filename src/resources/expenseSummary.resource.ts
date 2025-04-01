import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadExpenses } from "../helpers/crud.expenses.js";
import { IMcpResource } from "../core/mcpResource.js";

export class ExpensesSummary implements IMcpResource {

    extendMcpServer(mcpServer: McpServer): void {
        mcpServer.resource(
            "expense-summary",
            "finance://expenses/summary",
            async () => {
              const expenses = loadExpenses();
              const summary = {
                total: expenses.reduce((sum, exp) => sum + exp.amount, 0),
                byCategory: expenses.reduce((acc: { [key: string]: number }, exp) => {
                  acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
                  return acc;
                }, {}),
                recentTransactions: expenses.slice(-5)
              };
          
              return {
                contents: [{ uri: "finance://expenses/summary", text: JSON.stringify(summary) }]
              };
            }
          );
    }
}