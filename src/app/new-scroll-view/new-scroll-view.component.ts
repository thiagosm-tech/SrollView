import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './new-scroll-view.component.html',
  styleUrls: ['./new-scroll-view.component.html']
})
export class NewScrollViewComponent implements OnInit {

  @ViewChild('sectionOne') sectionOne!: ElementRef;
  @ViewChild('sectionTwo') sectionTwo!: ElementRef;
  @ViewChild('sectionThree') sectionThree!: ElementRef;
  @ViewChild('sectionFour') sectionFour!: ElementRef;
  @ViewChild('sectionFive') sectionFive!: ElementRef;

  oneOffset!: number;
  TwoOffset!: number;
  ThreeOffset!: number;
  FourOffset!: number;
  FiveOffset!: number;

  public currentActive = 0;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  ngAfterViewInit() {
    this.oneOffset = this.sectionOne.nativeElement.offsetTop;
    this.TwoOffset = this.sectionTwo.nativeElement.offsetTop;
    this.ThreeOffset = this.sectionThree.nativeElement.offsetTop;
    this.FourOffset = this.sectionFour.nativeElement.offsetTop;
    this.FiveOffset = this.sectionFive.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])

  checkOffsetTop() {
    if (window.pageYOffset >= this.oneOffset && window.pageYOffset < this.TwoOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.TwoOffset && window.pageYOffset < this.ThreeOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.ThreeOffset && window.pageYOffset < this.FourOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.FourOffset && window.pageYOffset < this.FiveOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.FiveOffset){
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }
}
