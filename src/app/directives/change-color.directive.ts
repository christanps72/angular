import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  @Input('appChangeColor') color = 'transparent';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    // elementRef.nativeElement.style.backgroundColor = 'red';
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  @HostListener('click', ['$event.target']) onClick(event: any) {
    console.log('desde el directiva');
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'red'
    );
  }
}
