import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IMcpExtension } from "../core/mcpExtenstion.js";
import { z } from "zod";
import { loadExpenses } from "../helpers/crud.expenses.js";
import { join } from "path";
import { IMcpTool } from "../core/mcpTool.js";

export class AnalyzeBudget implements IMcpTool{
    extendMcpServer(mcpServer: McpServer): void {
        mcpServer.tool(
            "analyze-budget",
            "Analyze monthly spending patterns",
            { month: z.number(), year: z.number() },
            async ({ month, year }) => {
              const expenses = loadExpenses();
              const monthlyExpenses = expenses.filter(exp => {
                const date = new Date(exp.date);
                return date.getMonth() === (month - 1) && date.getFullYear() === year;
              });
          
              const analysis = {
                path: join(process.cwd(), 'expenses.json'),
                totalSpent: monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0),
                categoryBreakdown: monthlyExpenses.reduce((acc: { [key: string]: number }, exp) => {
                  acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
                  return acc;
                }, {}),
                averageExpense: monthlyExpenses.length ? 
                  monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0) / monthlyExpenses.length : 0
              };
          
              return {
                content: [{ type: "text", text: JSON.stringify(analysis) }]
              };
            }
          );
    }

}