import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent {
  job: any = null;
  applicant = {
    name: '',
    email: '',
    resume: null
  };
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id'); // Get job ID from URL

    this.http.get<any[]>('assets/jobs.json').subscribe(jobs => {
      this.job = jobs.find(job => job.id === jobId);
      if (!this.job) {
        alert('Job not found!');
        this.router.navigate(['/']); // Redirect if job is not found
      }
    });
  }

  onFileSelected(event: any): void {
    this.applicant.resume = event.target.files[0];
  }

  apply(): void {
    if (this.applicant.name && this.applicant.email && this.applicant.resume) {
      console.log('Application submitted:', this.applicant);
      alert('Application submitted successfully!');
      this.router.navigate(['/']);
    } else {
      alert('Please fill out all fields.');
    }
  }

}
