import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  camData: any;
  shortcuts: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  constructor(
    private productService: ProductServiceService
  ) {}
  ngOnInit() {
    console.log("init")
    this.getProduct();
    
  }
  async getProduct() {
    try {
      const res: any = await this.productService.getProduct()
      console.log(res)
      this.camData = res.campaigns
      this.shortcuts = res.shortcuts
      console.log(this.shortcuts)
    } catch (error) {
      console.log(error)
    }
  }

}
