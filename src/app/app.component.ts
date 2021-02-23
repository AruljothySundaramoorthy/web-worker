import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-worker';
  number: any;

  webWorker: any = null;

  ngOnInit() { }
  setworker() {
    if (this.webWorker == null) {
      this.webWorker = new Worker('./webworker.worker', { type: `module` });
    }
    this.webWorker.onmessage = function (data: any) {
      alert('Check the console')
      console.log(
        '🚀 ~ file: app.component.ts ~ line 31 ~ AppComponent ~ ngOnInit ~ data',
        data
      );
    };
  }
  calcFib() {
    if (this.number) {

      if (this.webWorker == null) {
        this.setworker();
      }
      this.webWorker.postMessage(this.number);
    } else {
      alert('Enter valid parameter to calculate')
    }
  }

}
