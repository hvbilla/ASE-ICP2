import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare const responsiveVoice: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  recipe = {
    name: '',
  }

  nutritionData;
  displayResult =false;
  wrongEntry= false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    

  getNutrition(){
    this.displayResult =false;
    console.log(this.recipe.name);
    let url: string = 'https://api.nutritionix.com/v1_1/search/' + this.recipe.name + '?results=0:1&fields=*&appId=c3a0633c&appKey=be063d13fbadd44d64c14af405f3b3de';
    this.http.get(url)
        .subscribe((resp) => {
          
          if(resp["total_hits"] == 0) {
            this.wrongEntry=true;
          }else{                   
          this.nutritionData = resp;
          console.log(resp);          
          this.displayResult=true;
          }
          responsiveVoice.speak('The Weight of ' + this.recipe.name + ' is ' + this.nutritionData.hits[0].fields.nf_serving_weight_grams);
          responsiveVoice.speak('The Calories of ' + this.recipe.name + ' is ' + this.nutritionData.hits[0].fields.nf_calories);
        });
        
  }
}
