import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.scss']
})
export class ScrollViewComponent implements OnInit {

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
    const pageOffSet = window.pageYOffset + 100;
    if (pageOffSet >= this.oneOffset && pageOffSet < this.TwoOffset) {
      this.currentActive = 1;
    } else if (pageOffSet >= this.TwoOffset && pageOffSet < this.ThreeOffset) {
      this.currentActive = 2;
    } else if (pageOffSet >= this.ThreeOffset && pageOffSet < this.FourOffset) {
      this.currentActive = 3;
    } else if (pageOffSet >= this.FourOffset && pageOffSet < this.FiveOffset) {
      this.currentActive = 4;
    } else if (pageOffSet >= this.FiveOffset){
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }
}
