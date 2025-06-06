import * as vscode from 'vscode';
import { HrTimer } from './common';

export class GeneralDebugChannel {
    private static vscodeDebugChannel: vscode.OutputChannel;
    private static globalHrTimer = new HrTimer();

    public static createDebugChanne() {
        if (!GeneralDebugChannel.vscodeDebugChannel) {
            const options: object = {
                log: true
            };
            // (options as any).loglevel = vscode.LogLevel.Trace;
            GeneralDebugChannel.vscodeDebugChannel = vscode.window.createOutputChannel('General-Debug');
            GeneralDebugChannel.vscodeDebugChannel.hide();
        }
    }

    public static debugMessage(msg: string): void {
        if (GeneralDebugChannel.vscodeDebugChannel) {
            const ts = GeneralDebugChannel.globalHrTimer.createDateTimestamp();
            GeneralDebugChannel.vscodeDebugChannel.appendLine(ts + ' ' + msg);
        }
    }
}
