import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  Input,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-a",
  template: `
    <p>a-{{ a }} {{ i }}</p>
  `
})
export class AComponent implements OnChanges {
  @Input() i;
  a: number = 0;
  constructor(private cdr: ChangeDetectorRef) {
    let i = 0;
    cdr.detach();
  }
  onRender() {
    console.log("a");
  }
  ngOnChanges() {
    console.log("change detection:A", this.i);
    this.cdr.detectChanges();
  }
}

@Component({
  selector: "app-b",
  template: `
    <p>b- {{ b }} {{ i }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent
  implements
    OnChanges,
    OnInit,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked {
  @Input() i;
  b: number = 0;
  constructor(private cdr: ChangeDetectorRef) {}
  onRender() {}

  ngOnChanges() {
    console.log("change detection:B", this.i);
    this.cdr.markForCheck();
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
    this.cdr.detach();
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
}

@Component({
  selector: "app-c",
  template: `
    <p>c- {{ c }} {{ i }}</p>
    <button type="button" (click)="add()">add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent implements OnChanges {
  @Input() i;
  c: number = 0;
  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }
  add() {
    this.c++;
  }

  ngOnChanges() {
    console.log("change detection:C", this.i);
    this.cdr.markForCheck();
  }
}
