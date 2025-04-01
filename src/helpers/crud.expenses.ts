import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Expense } from "../types/expense.js";

export function saveExpense(expense: Expense) {
    const expenses = loadExpenses();
    expenses.push(expense);
    writeFileSync(
      join(process.cwd(), jsonFile), 
      JSON.stringify(expenses, null, 2)
    );
}

export function loadExpenses(): Expense[] {
    const filePath = join(process.cwd(), jsonFile);
    try {
        return JSON.parse(readFileSync(filePath, 'utf-8'));
    } catch (error) {
        // If file doesn't exist, create it with empty array
        writeFileSync(filePath, JSON.stringify([], null, 2));
        return [];
    }
}

export const jsonFile = "expenses.json"