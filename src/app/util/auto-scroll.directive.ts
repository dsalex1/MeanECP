import { Directive, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';

declare var $: any

@Directive({
    selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements AfterViewInit {

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        var scroller = this.el.nativeElement.children[0]
        var container = this.el.nativeElement

        var contentHeight = scroller.offsetHeight

        container.style.flexGrow = '1';
        scroller.style.display = 'none';

        var targetHeight = container.offsetHeight

        container.style.flexGrow = '0';
        scroller.style.display = 'table';

        console.log(contentHeight + "  " + targetHeight)
        if (contentHeight > targetHeight) {
            var newHeadline = $(scroller).find('.headline').clone();
            var newTable = $(scroller).clone().empty()
            $(newTable).append(newHeadline)
            $(container).before(newTable)
            $(scroller).find('.headline').find('td').each(function (index, width) {
                $(container).parent().find('tr').children().eq(index).width($(this).width())
                $(this).css("color", "rgba(255,255,255,0.0)");
            });

            container.style.overflow = 'hidden';

            $(scroller).clone().appendTo(container);

            loop(contentHeight, $(scroller));
        }

        function loop(height, obj) {
            obj.css({ "margin-top": "0px" });
            obj.velocity({
                "margin-top": "-=" + height + "px",
            }, 20 * height, 'linear', function () {
                loop(height, obj);
            });
        }


    }

}
