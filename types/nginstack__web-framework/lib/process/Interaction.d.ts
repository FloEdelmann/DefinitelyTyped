export = Interaction;
declare function Interaction(
    process: any,
    name: any,
    functionOfInteraction: any,
    onExitFunction: any,
): void;
declare class Interaction {
    constructor(process: any, name: any, functionOfInteraction: any, onExitFunction: any);
    process: import("./Process");
    functions: LegacyEvent;
    name: string;
    onExit: LegacyEvent;
    private lastExecuteOk;
    private isInteractive;
    private withUserInteraction;
    private logger_;
    private running;
    private permissionKeyWord;
    private run;
    close(): void;
}
declare namespace Interaction {
    export { Process };
}
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
type Process = import("./Process");
