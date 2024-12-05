/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
* Custom blocks
*/
//% block="FreastLog" weight=100 color=#ffc2ed icon=""
namespace FreastLog {

    /**
    * TODO: describe your function here
    * @param n "NAME"
    * @param d "DIALOG"
    * @param p "PRIORITY"
    */
    //export let name: string = null
    //export let dialog: string = null
    //export let char1: Array<Image> = null
    //export let char2: Array<Image> = null
    //export let priority: number = null

    //% block
    
    export function Log(name:  string, dialog: string, c1: Array<Image>, c2: Array<Image>, p: number): Array<any> 
    {
        let s: Array<any> = []
        s[0] = name;
        s[1] = dialog;
        s[2] = c1;
        s[3] = c2;
        s[4]  = p;
        return s;
    }
    //% block
    export function Name(dialogue: Array<any>): string{
        return dialogue[0]
    }

    //% block
    export function Dialog(dialogue: Array<any>): string {
        return dialogue[1]
    }

    //% block
    export function Char1(dialogue: Array<any>): Array<Image> {
        return dialogue[2]
    }

    //% block
    export function Char2(dialogue: Array<any>): Array<Image> {
        return dialogue[3]
    }

    //% block
    export function Priority(dialogue: Array<any>): number {
        return dialogue[4]
    }
}