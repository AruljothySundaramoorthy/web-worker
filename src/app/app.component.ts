import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'w-worker';
  number: any;
  output: any;
  webWorker: any = null;

  ngOnInit() { }
  setworker() {
    if (this.webWorker == null) {
      this.webWorker = new Worker('./webworker.worker', { type: `module` });
    }
    this.webWorker.onmessage = function (data: any) {
      console.log(
        '🚀 ~ file: app.component.ts ~ line 31 ~ AppComponent ~ ngOnInit ~ data',
        data
      );
      this.output = data.data;
    };
  }
  calcFib() {
    if (this.webWorker == null) {
      this.setworker();
    }
    // this.webWorker.postMessage(5)
    this.webWorker.postMessage(this.number);
    // this.output = fibonacci(this.number)
  }
  alertcheck() {
    for (let i = 0; i <= 100; i++) {
      console.log('hi');
    }
    this.webWorker.terminate();
    this.webWorker = null;
    alert('hi');
  }
}
// function fibonacci(num: any): any {
//   if (num == 1 || num == 2) {
//     return 1
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2)
// }
