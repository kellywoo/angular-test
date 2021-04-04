import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  Input,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-a",
  template: `
    <p>a-{{ a }}</p>
  `
})
export class AComponent {
  a: number = 0;
  constructor() {
    let i = 0;
    setInterval(() => {
      this.a++;
      console.log("a");
    }, 5000);
  }
  onRender() {
    console.log("a");
  }
}

@Component({
  selector: "app-b",
  template: `
    <p>b- {{ b }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent {
  b: number = 0;
  constructor() {
    let i = 0;
    setInterval(() => {
      this.b++;
      console.log("b");
    }, 5000);
  }
  onRender() {}
}

@Component({
  selector: "app-d",
  template: `
    {{ p }}
    <app-e></app-e>
    <app-f [p]="p"></app-f>
    <button type="button" (click)="add()">add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DComponent
  implements
    OnChanges,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked {
  @Input() p = "dd";
  ngOnChanges() {
    console.log("hello changes");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  add() {}
}

@Component({
  selector: "app-e",
  template: `
    <div>eee</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EComponent
  implements
    OnChanges,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked {
  ngOnChanges() {
    console.log("E: hello changes");
  }
  ngAfterViewChecked() {
    console.log("E: AfterViewChecked");
  }
  ngAfterViewInit() {
    console.log("E: ngAfterViewInit");
  }
  ngAfterContentChecked() {
    console.log("E: ngAfterContentChecked");
  }
  ngAfterContentInit() {
    console.log("E: ngAfterContentInit");
  }
}

@Component({
  selector: "app-f",
  template: `
    <div>fff: {{ p }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FComponent
  implements
    OnChanges,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked {
  @Input() p = "p";
  ngOnChanges() {
    console.log("F: hello changes");
  }
  ngAfterViewChecked() {
    console.log("F: AfterViewChecked");
  }
  ngAfterViewInit() {
    console.log("F: ngAfterViewInit");
  }
  ngAfterContentChecked() {
    console.log("F: ngAfterContentChecked");
  }
  ngAfterContentInit() {
    console.log("F: ngAfterContentInit");
  }
}

@Component({
  selector: "app-c",
  template: `
    <p>c- {{ c }}</p>
    <button type="button" (click)="add()">add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent {
  c: number = 0;
  add() {
    this.c++;
  }
}
