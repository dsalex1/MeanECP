import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transforms a color and highlight argument to a CSS color
 * Usage:
 *   value | JSONColToCSS:highlight
 * Example:
 *   {{ '#00FF00' |  JSONColToCSS:true}}
 *   formats to: 'rgba(0,235,0,1)'
 *   {{ 'transparent' |  JSONColToCSS:false}}
 *   formats to: 'rgba(0, 0, 0, 0)
*/
@Pipe({ name: 'JSONColToCSS' })
export class JSONColToCSSPipe implements PipeTransform {
    transform(input, highlight) {
        if (!highlight) {
            if (!input || input === 'transparent')
                return 'rgba(0, 0, 0, 0)';
            return input;
        }
        if (!input || input === 'transparent')
            return 'rgba(0,0,0,0.078)';
        var m = input.match(/^#([0-9a-f]{6})$/i)[1];
        var r = Math.round(parseInt(m.substr(0, 2), 16) * (1 - 0.078));
        var g = Math.round(parseInt(m.substr(2, 2), 16) * (1 - 0.078));
        var b = Math.round(parseInt(m.substr(4, 2), 16) * (1 - 0.078));
        return 'rgba(' + r + ',' + g + ',' + b + ',1)';

    }
}