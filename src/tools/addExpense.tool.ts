import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Expense } from "../types/expense.js";
import { saveExpense } from "../helpers/crud.expenses.js";
import { z } from "zod";
import { IMcpExtension } from "../core/mcpExtenstion.js";
import { IMcpTool } from "../core/mcpTool.js";

export class AddExpense implements IMcpTool{

    extendMcpServer(mcpServer: McpServer): void {
        mcpServer.tool(
            "add-expense",
            "Add a new expense",
            {
              amount: z.number(),
              category: z.string(),
              description: z.string()
            },
            async ({ amount, category, description }) => {
              const expense: Expense = {
                id: Date.now().toString(),
                amount,
                category,
                date: new Date().toISOString(),
                description
              };
              saveExpense(expense);
              return {
                content: [{ type: "text", text: `Expense added: ${amount} for ${description}` }]
              };
            }
          );
    }

}
