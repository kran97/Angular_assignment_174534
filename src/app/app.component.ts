import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment_174534';
  vari = 10;

  customObs = new Observable<number>((observer) => {
    let num = 0;
    setInterval(() => {
      observer.next(num++);
      if (num >2) {
        observer.complete();
      }
      if (num > 3) {
        observer.error(new Error('Count is greater than 3'));
      }
    }, 1000)
    // throw new Error('Producing error');
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route);
    // this.route.params.subscribe((param) => console.log(param));

    // this.customObs.pipe(map( (data: number) => {
    //   return 'Round ' + (data+1);
    // }))

    this.customObs.pipe(filter((data) => {
      return data > 0;
    }), map( (data: number) => {
      return 'Round ' + (data+1);
    })).subscribe((num) => {
      console.log(num);
    }, (err) => {
      console.log("This is error");
      console.error(err);
    }, () => {
      console.log("Completed!!!");
    });
  }

  routing(): void {
    this.router.navigate(['/'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
