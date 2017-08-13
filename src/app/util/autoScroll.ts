import { Directive, ElementRef, Input, AfterViewInit, OnChanges, HostListener } from '@angular/core';

declare var $: any


export class AutoScroll {

    firstTime: any = true

    contentHeight: number
    scroller: any

    applyScrolling(elem) { //FIXME: react on changes on host //REFACTOR: degenerelize into plan.component
        console.log("CHHHHAAAAAAAAAAAAAAAAANGEEEEEEESSSSS !!!!!!!!!!! :)")
        this.scroller = elem.children[0].children[0]
        var container = elem.children[0]

        if (!this.firstTime) {
            console.log("nor first time")
            container.chilren[1].remove()
            $(container).parent().chilren[0].remove()
            return
        }
        this.firstTime = false


        this.contentHeight = this.scroller.offsetHeight

        container.style.flexGrow = '1';
        this.scroller.style.display = 'none';

        var targetHeight = container.offsetHeight

        container.style.flexGrow = '0';
        this.scroller.style.display = 'table';

        if (this.contentHeight > targetHeight) {
            var newHeadline = $(this.scroller).find('.headline').clone();
            var newTable = $(this.scroller).clone().empty()
            $(newTable).append(newHeadline)
            $(container).before(newTable)
            $(this.scroller).find('.headline').find('td').each(function (index, width) {
                $(container).parent().find('tr').children().eq(index).width($(this).width())
                $(this).css("color", "rgba(255,255,255,0.0)");
            });

            container.style.overflow = 'hidden';

            $(this.scroller).clone().appendTo(container);

            this.loop();
        }
    }
    loop() {
        $(this.scroller).css({ "margin-top": "0px" });
        $(this.scroller).velocity({
            "margin-top": "-=" + this.contentHeight + "px",
        }, 20 * this.contentHeight, 'linear', function () {
            this.loop;
        });
    }
}
