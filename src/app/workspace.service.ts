import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Workspace {
  id: string;
  tabs: Tab[]
}

export interface Tab {
  id: string;
  title: string;
  tabData: any;
  default?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  defaultWKS = {
        id: 'default',
        tabs: [
          {
            default: true,
            id: 'default_tab',
            title: 'Default Dashboard',
            tabData: {
              description: 'This will appear as default workspace & tab for a normal user'
            }
          }
        ]
      };
  masterData: Workspace[] = [
    {
      id: '1',
      tabs: [
        {
          default: true,
          id: '11',
          title: 'Dashboard',
          tabData: {
            data: 'dashboard'
          }
        }
      ]
    },
    {
      id: '2',
      tabs: [
        {
          default: true,
          id: '21',
          tabData: {
            data: 'dashboard'
          },
          title: 'Dashboard'
        }
      ]
    }
  ];
  dataSubject = new BehaviorSubject(this.masterData);
  data = this.dataSubject.asObservable();
  selectedWorkspace;

  constructor() { }

  addTab(workspace: string, tab: Tab) {
    if (workspace) {
      const index = this.masterData.findIndex(wks => wks.id === workspace);
      this.masterData[index].tabs.push(tab);
      this.dataSubject.next(this.masterData);
    }
    else {
      this.defaultWKS.tabs.push(tab);
    }
  }

  closeTab(workspace, tab) {
    if (workspace) {
      const index = this.masterData.findIndex(wks => wks.id === workspace);
      const tabIndex = this.masterData[index].tabs.findIndex(orginalTab => orginalTab.id === tab.id);
      console.log(tabIndex);
      this.masterData[index].tabs.splice(tabIndex , 1);
      this.dataSubject.next(this.masterData);
    } else {
      const tabIndex = this.defaultWKS.tabs.findIndex(orginalTab => orginalTab.id === tab.id);
      console.log(tabIndex);
      this.defaultWKS.tabs.splice(tabIndex , 1);
      this.dataSubject.next([this.defaultWKS]);
    }
  }

  useDefaultWorkspace() {
    
    this.dataSubject.next([
      this.defaultWKS
    ]);
    return this.defaultWKS;
  }

  selectAdminWorkspace() {
    this.dataSubject.next(this.masterData);
  }

}