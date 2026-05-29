import {Component} from '@angular/core';
import {SidebarItemComponent} from './sidebar-item.component';


@Component({
  selector: 'sidebar',
  imports: [
    SidebarItemComponent
  ],
  styleUrls: ['./sidebar.component.css'],
  template: `
    <div class="sidebar">
      <sidebar-item
        title="Your info"
        [stepNumber]="1"
        path="/"
      />

      <sidebar-item
        title="Select plan"
        path="/select-plan"
        [stepNumber]="2"
      />

      <sidebar-item
        title="Add ons"
        path="/add-ons"
        [stepNumber]="3"
      />

      <sidebar-item
        title="Summary"
        path="/summary"
        [stepNumber]="4"
      />
    </div>
  `
})
export class SidebarComponent {

}
