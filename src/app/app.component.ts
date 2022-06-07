import { Component, ViewChild } from "@angular/core";
import { Form, NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: Form;
  defaultQuestion: string = "pet";
  answer: string = "";

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log("Submitted");
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
