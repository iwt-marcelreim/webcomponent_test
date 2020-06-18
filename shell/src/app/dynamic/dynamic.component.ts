import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  template: '',
  styles: [
  ]
})
export class DynamicComponent implements OnInit {

  constructor(readonly elementRef: ElementRef, readonly viewContainerRef: ViewContainerRef, readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewContainerRef.clear;
    const entryComponent = document.createElement('micro-ui');
    this.elementRef.nativeElement.appendChild(entryComponent);

    const scriptFiles = [
      "http://127.0.0.1:8080/polyfills-es5.js",
      // "http://127.0.0.1:8080/vendor-es5.js",
      // "http://127.0.0.1:8080/styles-es5.js",
      "http://127.0.0.1:8080/runtime-es2015.js",
      "http://127.0.0.1:8080/main-es5.js"
    ];

    scriptFiles.forEach(file => {
      const script = document.createElement('script');
      script.type = "module";
      script.src = file;
      script.crossOrigin = "anonymous";

      this.elementRef.nativeElement.appendChild(script);
    })
  }
}

