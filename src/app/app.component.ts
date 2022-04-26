import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

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
      icon: 'fal fa-cog',
      children: [
        {
          title: 'Languages',
          link: 'admin_languages'
        },
        {
          title: 'Translation Steps',
          link: 'admin_translationsteps'
        },
        {
          title: 'Exam Translation Steps',
          link: 'admin_examtranslationsteps'
        },
        {
          title: 'Mastering Steps',
          link: 'admin_masteringsteps',
        },
        {
          title: 'Media Types',
          link: 'admin_mediatypes'
        }
      ]
    },

    {
      title: 'Curriculum Cores',
      icon: 'fal fa-anchor',
      children: [
        {
          title: 'Curriculum',
          link: 'cores_curriculum',
        },
        {
          title: 'SemesterCores',
          link: 'cores_SemesterCores',
        },
        {
          title: 'CourseCores',
          link: 'cores_coursecores',
        },
        {
          title: 'SessionsCores',
          link: 'cores_sessioncores',
        }
      ]
    },
    {
      title: 'Persons',
      icon: 'fal fa-address-card',
      children: [
        {
          title: 'All Persons',
          link: 'persons_persons?filter=0'
        },
        {
          title: 'Customers',
          link: 'persons_persons?filter=1'
        },
        {
          title: 'Instructors',
          link: 'persons_persons?filter=6'
        },

        {
          title: 'Admins',
          link: 'persons_persons?filter=2'
        },
        {
          title: 'Translators',
          link: 'persons_persons?filter=3'
        },
        {
          title: 'Masterers',
          link: 'persons_persons?filter=4'
        },
        {
          title: 'Archivers',
          link: 'persons_persons?filter=5'
        }
      ]
    },

    {
      title: 'Organizations',
      link: 'org_organizations',
      icon: 'fal fa-sitemap',
    },


    {
      title: 'Manage Work',
      icon: 'fal fa-pencil',
      children: [
        {
          title: 'Create Translations',
          link: 'workflow_createtranslations'
        },
        {
          title: 'Manage Translations',
          link: 'workflow_getmanagedtranslations'
        },
        {
          title: 'Manage Mastering',
          link: 'workflow_getmanagedmasterings'
        },
        {
          title: 'Manage Distributions',
          link: 'workflow_distributionmanagement'
        },
        {
          title: 'Distribution History',
          link: 'workflow_distributionhistory'
        }
      ]
    },
    {
      title: 'Payments',
      icon: 'fal fa-university',
      children: [
        {
          title: 'Manage Translation Payments',
          link: 'TBD'
        },
        {
          title: 'Manage Mastering Payments',
          link: 'TBD'
        },
        {
          title: 'Custom Translation Pay',
          link: 'TBD'
        },
        {
          title: 'Custom Mastering Pay',
          link: 'TBD'
        },
        {
          title: 'Custom Pay By Language',
          link: 'TBD'
        },
        {
          title: 'Accounting and Invoicing',
          link: 'TBD'
        },
        {
          title: 'Accounting Reports',
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


