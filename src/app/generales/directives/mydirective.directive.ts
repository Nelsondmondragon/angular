import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class MydirectiveDirective implements OnInit, OnDestroy {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  isCicle = true;
  private colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];
  private currentIndex: number = 0;

  ngOnInit(): void {
    this.startColorCycle();
  }

  startColorCycle() {
    if (this.isCicle) {
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'background-color',
        this.colors[this.currentIndex]
      );

      this.currentIndex = (this.currentIndex + 1) % this.colors.length;

      setTimeout(() => this.startColorCycle(), 1000); // Cambia el color cada 1 segundo
    }
  }

  ngOnDestroy() {
    this.isCicle = false;
  }
}
