import { Directive, Host, HostListener, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentsDirective } from './contents.directive';

@Directive({
  selector: '[contentsLink]',
  exportAs: 'contentsLink',
})
export class ContentsLinkDirective implements OnInit, OnDestroy {
  ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() name: any;
  @Input() href: any;

  @HostBinding('class.active') active = false;

  constructor(
    @Host() public contents: ContentsDirective,
  ) { }

  ngOnInit() {
    this.contents._activeSection$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((sectionName: string) => {
      this.active = `${sectionName}` === this.href.split('#')[1];
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
