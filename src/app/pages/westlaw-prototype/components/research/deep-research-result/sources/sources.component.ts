import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as sourcesData from './sources.component.json';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.less']
})

export class SourcesComponent {
  @Input() fullReport: boolean = false;
  @Output() onClicked: EventEmitter<any> = new EventEmitter();
  sources = sourcesData;
  currentSource: any = '';

  ngOnInit(): void {
    this.currentSource = this.fullReport ? this.sources.sources : this.sources.sources.slice(0, 4);
  }

  sourceClicked(event: MouseEvent, sourceId:number, snippetId?:string): void {
    this.onClicked.emit([event, sourceId, snippetId]);
}
}