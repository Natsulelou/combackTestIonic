import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {
  camData: any;
  shortcuts: any;

  constructor(
    private productService: ProductServiceService
  ) { }

  ngOnInit() {
    console.log("ngoinit")
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
