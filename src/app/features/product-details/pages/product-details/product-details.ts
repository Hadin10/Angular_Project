import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private ProductDetailes1 =  `
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                
                                <br> <br>
                                
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                                আমার সোনার বাংলা, আমি তোমায় ভালবাসি। চিরদিন তোমার আকাশ তোমার বাতাস। 
                              
                              `

  products = [
    {id: 1, details:  this.ProductDetailes1, image: 'images/picture1.png'},
    {id: 2, details:  this.ProductDetailes1, image: 'images/picture2.png'},
    {id: 3, details:  this.ProductDetailes1, image: 'images/picture3.png'},
    {id: 4, details:  this.ProductDetailes1, image: 'images/picture4.png'},
    {id: 5, details:  this.ProductDetailes1, image: 'images/picture5.png'},
    {id: 6, details:  this.ProductDetailes1, image: 'images/picture6.png'},
    {id: 7, details:  this.ProductDetailes1, image: 'images/picture7.png'},
    {id: 8, details:  this.ProductDetailes1, image: 'images/picture8.png'},
    {id: 9, details:  this.ProductDetailes1, image: 'images/picture9.png'},
    {id: 10, details:  this.ProductDetailes1, image: 'images/picture10.png'}
    ];
  Product: any;
  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.Product = this.products.find(x => x.id === id);
    // Call API
  }
}
