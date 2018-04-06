import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding( 'class.open' ) isOpen = false;

    @HostListener( 'click' ) toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {}

    /* the code below also works, bind click on toggle button and add 'open' class to the parent element */
    // @HostListener( 'click' ) toggleDropdown() {
    // 	if ( !this.isOpen ) {
    // 		this.renderer.addClass( this.renderer.parentNode( this.elementRef.nativeElement ), 'open' );
    // 		this.isOpen = true;
    // 	} else {
    // 		this.renderer.removeClass( this.renderer.parentNode( this.elementRef.nativeElement ), 'open' );
    // 		this.isOpen = false;
    // 	}
    // }

}
