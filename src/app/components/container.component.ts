import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'container',
  template: `
    <div class="container">
      <div class="form-card">
        <sidebar></sidebar>
        <div>
          <router-outlet/>
        </div>
      </div>
    </div>
  `,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SidebarComponent
  ],
  standalone: true,
  styleUrl: 'container.component.css'
})
export class ContainerComponent {

}
