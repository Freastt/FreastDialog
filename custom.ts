/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


//% block="FreastLog" weight=100 color=#ffc2ed icon=""
namespace FreastLog {
    export class LogEntry {
        constructor(
            public name: string,
            public dialog: string,
            public char1: Image[],
            public char2: Image[],
            public priority: number
        ) {}

    }
    
    //% block
    export function Log(name:  string, dialog: string, c1: Array<Image>, c2: Array<Image>, p: number): LogEntry 
    {
        return new LogEntry(name, dialog, c1, c2, p)
    }
    //% block
    export function Name(dialogue: LogEntry): string{
        return dialogue.name
    }

    //% block
    export function Dialog(dialogue: LogEntry): string {
        return dialogue.dialog
    }

    //% block
    export function Char1(dialogue: LogEntry): Image[] {
        return dialogue.char1
    }

    //% block
    export function Char2(dialogue: LogEntry): Image[] {
        return dialogue.char2
    }

    //% block
    export function Priority(dialogue: LogEntry): number {
        return dialogue.priority
    }
}