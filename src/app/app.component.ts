import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion: string = "pet";
  defaultGender: string = "female";
  answer: string = "";
  genders: string[] = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";

    // OVERRIDE WHOLE FORM CONTENT
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "female",
    // });

    // Updates just information passed
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
