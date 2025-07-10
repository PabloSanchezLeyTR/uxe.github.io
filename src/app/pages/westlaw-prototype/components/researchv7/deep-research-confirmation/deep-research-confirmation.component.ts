import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deep-research-confirmation',
  templateUrl: './deep-research-confirmation.component.html',
  styleUrls: ['./deep-research-confirmation.component.less'],
})
export class DeepResearchConfirmationComponentv7 {
  form = new FormGroup({
    longerTime: new FormControl<string | null>('ten'),
  });

  @ViewChild('scrollContainer')
  private scrollContainer!: ElementRef;
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  editPlanInProgress: boolean = false;
  editPlan: boolean = false;
  newPlan: string = '';
  addNewPlanTemp: boolean = false;
  addNewPlan: boolean = false;
  initialPlan: string[] = [
    'Identify the relevant New York anti-discrimination laws governing employment and hiring practices.',
                  'Research case law addressing "same-protected-class" discrimination claims in New York.',
                  "Examine how New York courts have specifically handled failure-to-hire claims where the successful candidate shares the plaintiff's protected characteristic. ",
                  'Determine if there are any exceptions or special circumstances where such claims can proceed. ',
                  "Compare New York's approach to federal precedent on this issue. ",
                  'Analyze the legal reasoning behind allowing or disallowing such claims. ',
                  'Identify the current legal standard for evaluating these claims in New York. ',
  ];
  plan: string[] = [
    'Identify the relevant New York anti-discrimination laws governing employment and hiring practices.',
                  'Research case law addressing "same-protected-class" discrimination claims in New York.',
                  "Examine how New York courts have specifically handled failure-to-hire claims where the successful candidate shares the plaintiff's protected characteristic. ",
                  'Determine if there are any exceptions or special circumstances where such claims can proceed. ',
                  "Compare New York's approach to federal precedent on this issue. ",
                  'Analyze the legal reasoning behind allowing or disallowing such claims. ',
                  'Identify the current legal standard for evaluating these claims in New York. ',
  ];

  get longerTime() {
    return this.form.controls.longerTime.value;
  }

  onTimeChange(deepness: string | null) {
    this.form.controls.longerTime.setValue(deepness);
  }

  handleEditPlan() {
    this.editPlan = !this.editPlan;
    this.editPlanInProgress = true;
    this.scrollToBottom();
  }

  handleAddToPlan(event:any){
    this.plan.push(this.newPlan);
    //this.newPlan = '';
    this.editPlan = false;
    this.addNewPlanTemp = true;

    setTimeout(() => {
      this.editPlanInProgress = false;
      //this.addNewPlanTemp = false;
      this.addNewPlan = true;
      this.scrollToBottom();
    }, 3000);

  }

  handleDiscardEditPlan(){
    this.editPlanInProgress = false;
    this.editPlan = false;
    this.newPlan = '';
    this.addNewPlanTemp = false;
    this.addNewPlan = false;
    this.scrollToBottom();
  }

  handleAddSuggestion(suggestion: string) {
    this.newPlan = suggestion;
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
