import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IMcpExtension } from "./mcpExtenstion.js";
import { IMcpTool } from "./mcpTool.js";
import { IMcpResource } from "./mcpResource.js";

export class McpUtilityLoader{
    constructor(protected mcpServer: McpServer){}

    private loadUtility(utilities: IMcpExtension[]): void {
        utilities.forEach((utility) => {
            utility.extendMcpServer(this.mcpServer);
        })
    }

    loadAllTools(toolsExtensions: IMcpTool[]): void {
        this.loadUtility(toolsExtensions)
    }

    loadAllResources(resourcesExtensions: IMcpResource[]): void{
        this.loadUtility(resourcesExtensions)
    };
}