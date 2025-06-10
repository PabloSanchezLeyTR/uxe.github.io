import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as sourcesData from './sources.component.json';

@Component({
  selector: 'app-sources-v2',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.less']
})

export class SourcesComponentv2 {
  @Input() fullReport: boolean = false;
  @Output() onClicked: EventEmitter<any> = new EventEmitter();
  sources = sourcesData;

  sourceClicked(event: MouseEvent, sourceId:number, snippetId?:string): void {
    this.onClicked.emit([event, sourceId, snippetId]);
  }


}