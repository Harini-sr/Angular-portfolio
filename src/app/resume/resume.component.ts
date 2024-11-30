import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  skills = {
    webTechnologies: 'HTML, CSS, Bootstrap, Angular, MongoDB',
    ide: 'VS Code',
    os: 'Windows 10, Windows 11',
    interest: 'Full Stack Web Development',
    degree : "BE in computer Science"
  };

  resumePath = 'assets/images/Resume.docx';
}
