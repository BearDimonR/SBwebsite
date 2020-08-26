import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Network, DataSet } from 'vis';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, AfterViewInit {

  @ViewChild('network', {static: false}) networkRef: ElementRef;
  private networkInstance: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const container = this.networkRef.nativeElement;
    const nodes = new DataSet<any>([
      {id: 1, label: '1'},
      {id: 2, label: '2'},
      {id: 3, label: '3'},
      {id: 4, label: '4'},
      {id: 5, label: '5'}
    ]);

    const edges = new DataSet<any>([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);
    const data = { nodes, edges };
    console.log(this.networkRef);
    const width = this.networkRef.nativeElement.offsetWidth.toString();
    const height = this.networkRef.nativeElement.offsetHeight.toString();

    this.networkInstance = new Network(container, data,
      {
        width,
        height,
        interaction:
          {
          dragNodes: true,
          dragView: true,
          hideEdgesOnDrag: false,
          hideNodesOnDrag: false,
          hover: true,
          hoverConnectedEdges: true,
          keyboard: {
            enabled: false,
            speed: {x: 10, y: 10, zoom: 0.02},
            bindToWindow: true
          },
          multiselect: false,
          navigationButtons: true,
          selectable: true,
          selectConnectedEdges: true,
          tooltipDelay: 300,
          zoomView: false
        }
      });
  }

}
