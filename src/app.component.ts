import { Component, OnInit } from '@angular/core';
import { ContentComponent } from './content-tab/content-tab.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TabComponent, TabsComponent, ContentComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
