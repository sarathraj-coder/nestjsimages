import { Controller, Get, Query } from '@nestjs/common';
import { ImageData } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {

  

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/searchimages")
  getImages(@Query('searchkey') searchkey) {
    var i1 = new ImageData(1,"Jeep","https://raw.githubusercontent.com/sarathraj-coder/images/main/jeep.jpg","vehicle jeep")
    var i2 = new ImageData(2,"BMW","https://raw.githubusercontent.com/sarathraj-coder/images/main/bmw.jpg","vehicle car ")
    var i3 = new ImageData(3,"ford","https://raw.githubusercontent.com/sarathraj-coder/images/main/ford.jpg","vehicle car ford")
    var i4 = new ImageData(4,"cycle","https://raw.githubusercontent.com/sarathraj-coder/images/main/cycle.jpg","vehicle ")
    var i5 = new ImageData(5,"tree","https://raw.githubusercontent.com/sarathraj-coder/images/main/tree.jpg","This is a tree ")
    var i6 = new ImageData(6,"human","https://raw.githubusercontent.com/sarathraj-coder/images/main/human.jpg","human ")
    var i7 = new ImageData(7,"rabbit","https://raw.githubusercontent.com/sarathraj-coder/images/main/rabbit.jpg","animal rabbit ")
    var i8 = new ImageData(8,"cow","https://raw.githubusercontent.com/sarathraj-coder/images/main/cow.jpg","animal cow ")
    var i9 = new ImageData(9,"hourse","https://raw.githubusercontent.com/sarathraj-coder/images/main/hourse.jpg","animal hourse")
    var i10 = new ImageData(10,"computer","https://raw.githubusercontent.com/sarathraj-coder/images/main/computer.jpg","machine computer ")
    const images:ImageData[] = []
    images.push(i1)
    images.push(i2)
    images.push(i3)
    images.push(i4)
    images.push(i5)
    images.push(i6)
    images.push(i7)
    images.push(i8)
    images.push(i9)
    images.push(i10)

    console.log(searchkey)
    var ik:string = searchkey
    if(ik=='all'){
      return images
    }else{
  
    var selectedImages = images.filter(i => i.name.toLowerCase() === ik.toLowerCase())
    return selectedImages;
    }
  }
}
