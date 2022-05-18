import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  url: string = "https://run.mocky.io/v3/b606e1f7-74f2-429d-93de-32ce62ab7901";
  response: Array<any> = [];
  seacrhText: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.url).subscribe((res: any) => {
      this.response = res;
      console.log(this.response);
    });
  }

  onKeyDown($event) {
    console.log($event);
  }

  clearSearch() {
    this.seacrhText = '';
  }
}
