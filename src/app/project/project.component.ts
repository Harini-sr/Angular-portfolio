import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      title: 'PIMS',
      description: 'This is a web Application, through this application user can register their issues like road damage, Water leakage and Street light not working etc.., And it allows user can send their feedback through email.',
      image: '/assets/images/pims.png',
      githubLink: 'https://github.com/Harini-sr/pims-project',
      liveDemo: ''
    },
    {
      title: 'Portfolio',
      description: 'In this Website to developed i used complete Bootstrap, through this portfolio i explained my project and skill.',
      image: 'assets/images/portfolio.png',
      githubLink: 'https://github.com/your-repo/bank-app',
      liveDemo: 'https://your-demo-link.com'
    },
    {
      title: 'Panchayat Issue Management System',
      description: 'This is a mobile application, this project to developed i used Flutter. through this app public can send their panchayat issue and also we can track the complaint status.',
      image: 'assets/images/panchayat.png',
      githubLink: 'https://github.com/your-repo/bank-app',
      liveDemo: 'https://your-demo-link.com'
    },
    {
      title: 'Fashion World!',
      description: 'In this Website to developed i used HTML, CSS and Javascript,  it is a stactic website .',
      image: 'assets/images/webdesign.png',
      githubLink: 'https://github.com/your-repo/bank-app',
      liveDemo: 'https://your-demo-link.com'
    },
  ];
}
