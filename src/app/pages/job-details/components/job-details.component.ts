import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  job: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id'); // Get job ID from URL

    this.http.get<any[]>('assets/jobs.json').subscribe(jobs => {
      console.log("this is the jobs details info",jobs)

      this.job = jobs.find(job => job.id === jobId); // Find job by ID
      console.log("jobs details >>>",this.job)
    });
  }
  applyForJob(): void {
    this.router.navigate(['/apply', this.job.id]);
  }
}
