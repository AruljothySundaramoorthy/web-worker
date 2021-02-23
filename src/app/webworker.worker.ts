/// <reference lib="webworker" />

// webWorker-demo/src/app/webWorker.ts



export class Service{
  constructor(){}
}
function fibonacci(num: any): number {
  if (num == 1 || num == 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}
self.addEventListener('message', (evt: any) => {
  const num = evt.data
  postMessage(fibonacci(num))
})
