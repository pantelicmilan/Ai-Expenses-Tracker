import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export interface IMcpExtension {
    extendMcpServer(mcpServer: McpServer):void
}