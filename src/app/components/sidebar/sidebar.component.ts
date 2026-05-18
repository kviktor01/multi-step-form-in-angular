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
      />

      <sidebar-item
        title="Select plan"
        [stepNumber]="2"
      />

      <sidebar-item
        title="Add ons"
        [stepNumber]="3"
      />

      <sidebar-item
        title="Summary"
        [stepNumber]="4"
      />
    </div>
  `
})
export class SidebarComponent {

}
