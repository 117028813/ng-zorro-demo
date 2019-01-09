import { Component, OnInit } from '@angular/core';
import { ComponentListService } from '../../providers/component-list.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.less']
})
export class ComponentsComponent implements OnInit {

  list = this.componentListService.componentList

  constructor(
    private componentListService: ComponentListService
  ) { }

  ngOnInit() {
  }

}
