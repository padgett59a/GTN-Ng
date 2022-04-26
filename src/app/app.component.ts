import { Component } from '@angular/core';
import { NbIconLibraries, NbMenuItem, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GTN-Ng';
  items: NbMenuItem[] = [
    {
      title: 'Admin',
      icon: 'settings-2-outline',
      children: [
        {
          title: 'Languages',
          icon: 'flag-outline',
          link: 'admin_languages'
        },
        {
          title: 'Translation Steps',
          icon: 'globe-outline',
          link: 'admin_translationsteps'
        },
        {
          title: 'Exam Translation Steps',
          icon: 'question-mark-circle-outline',
          link: 'admin_examtranslationsteps'
        },
        {
          title: 'Mastering Steps',
          icon: 'edit-outline',
          link: 'admin_masteringsteps',
        },
        {
          title: 'Media Types',
          icon: 'video-outline',
          link: 'admin_mediatypes'
        }
      ]
    },

    {
      title: 'Curriculum Cores',
      icon: 'cube-outline',
      children: [
        {
          title: 'Curriculum',
          icon: 'arrow-circle-right-outline',
          link: 'cores_curriculum',
        },
        {
          title: 'SemesterCores',
          icon: 'arrow-forward-outline',
          link: 'cores_SemesterCores',
        },
        {
          title: 'CourseCores',
          icon: 'arrowhead-right-outline',
          link: 'cores_coursecores',
        },
        {
          title: 'SessionsCores',
          icon: 'arrow-ios-forward-outline',
          link: 'cores_sessioncores',
        }
      ]
    },
    {
      title: 'Persons',
      icon: 'person-outline',
      children: [
        {
          title: 'All Persons',
          icon: 'people-outline',
          link: 'persons_persons?filter=0'
        },
        {
          title: 'Customers',
          icon: 'person-add-outline',
          link: 'persons_persons?filter=1'
        },
        {
          title: 'Instructors',
          icon: 'person-done-outline',
          link: 'persons_persons?filter=6'
        },

        {
          title: 'Admins',
          icon: 'shield-outline',
          link: 'persons_persons?filter=2'
        },
        {
          title: 'Translators',
          icon: 'person-delete-outline',
          link: 'persons_persons?filter=3'
        },
        {
          title: 'Masterers',
          icon: 'person-remove-outline',
          link: 'persons_persons?filter=4'
        },
        {
          title: 'Archivers',
          icon: 'archive-outline',
          link: 'persons_persons?filter=5'
        }
      ]
    },

    {
      title: 'Organizations',
      link: 'org_organizations',
      icon: 'umbrella-outline'
    },


    {
      title: 'Manage Work',
      icon: 'clipboard-outline',
      children: [
        {
          title: 'Create Translations',
          icon: 'layers-outline',
          link: 'workflow_createtranslations'
        },
        {
          title: 'Manage Translations',
          icon: 'globe-2-outline',
          link: 'workflow_getmanagedtranslations'
        },
        {
          title: 'Manage Mastering',
          icon: 'edit-outline',
          link: 'workflow_getmanagedmasterings'
        },
        {
          title: 'Manage Distributions',
          icon: 'car-outline',
          link: 'workflow_distributionmanagement'
        },
        {
          title: 'Distribution History',
          icon: 'calendar-outline',
          link: 'workflow_distributionhistory'
        }
      ]
    },
    {
      title: 'Payments',
      icon: 'credit-card-outline',
      children: [
        {
          title: 'Manage Translation Payments',
          icon: 'award-outline',
          link: 'TBD'
        },
        {
          title: 'Manage Mastering Payments',
          icon: 'award-outline',
          link: 'TBD'
        },
        {
          title: 'Custom Translation Pay',
          icon: 'award-outline',
          link: 'TBD'
        },
        {
          title: 'Custom Mastering Pay',
          icon: 'award-outline',
          link: 'TBD'
        },
        {
          title: 'Custom Pay By Language',
          icon: 'award-outline',
          link: 'TBD'
        },
        {
          title: 'Accounting and Invoicing',
          icon: 'clipboard-outline',
          link: 'TBD'
        },
        {
          title: 'Accounting Reports',
          icon: 'bar-chart-outline',
          link: 'TBD'
        }
      ]
    }
];


  constructor(private readonly sidebarService: NbSidebarService) {
  }
  
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}


