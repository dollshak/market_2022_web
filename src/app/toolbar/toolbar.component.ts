import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  productSearchBy:string;
  search_argument:string;


  constructor(private config: ConfigService) {
      this.productSearchBy = "Product Name";
      this.search_argument = "";
   }

  ngOnInit(): void {
  }


  loginClicked():void {
    this.config.isMemberLoggedIn=true;

  }

  searchItem(){
    switch (this.productSearchBy){
      case "Category":
        this.searchByCategory();
        break;
      case "Keyword":
        this.searchByKeyword();
        break;
      case "Product Name":
        this.searchByProductName();
        break;
    }
  }

  searchByProductName(){

  }
  searchByKeyword(){

  }
  searchByCategory(){

  }

  searchBy(){

  }

  register(){
    this.config.isRegisterClicked= true;
  }

  getMarketName(){
    return this.config.marketName;
  }

  getMemberName(){
    return this.config.memberName;
  }


  isMemberLoggedIn(): boolean{
    return this.config.isMemberLoggedIn;
  }



}
