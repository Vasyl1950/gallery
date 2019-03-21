import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
} 

}
const IMAGES =[
	{ "id":1, "category": "parap", "caption": "парапет", "url":"assets/img/par1.jpg"},
    { "id":2, "category": "parap", "caption": "парапет", "url":"assets/img/par2.jpg"},
    { "id":3, "category": "parap", "caption": "парапет", "url":"assets/img/par3.jpg"},
    { "id":4, "category": "parap", "caption": "парапет", "url":"assets/img/par4.jpg"},
    { "id":5, "category": "parap", "caption": "парапет", "url":"assets/img/rys10.jpg"},
    { "id":6, "category": "parap", "caption": "парапет", "url":"assets/img/rys14.jpg"},
    { "id":7, "category": "parap", "caption": "парапет", "url":"assets/img/rys12.jpg"},
    { "id":8, "category": "parap", "caption": "парапет", "url":"assets/img/rys20.jpg"},
    { "id":9, "category": "parap", "caption": "парапет", "url":"assets/img/rys9.jpg"},
    { "id":10, "category": "parap", "caption":"парапет", "url":"assets/img/rys8.png"},
    { "id":11, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/med1.jpg"},
    { "id":12, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img20.jpg"},
    { "id":13, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img20n.jpg"},
    { "id":14, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img21n.jpg"},
    { "id":15, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img22n.jpg"},
	{ "id":16, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img23.jpg"},
	{ "id":17, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img23n.jpg"},
	{ "id":18, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img24n.jpg"},
	{ "id":19, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img25n.jpg"},
	{ "id":20, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img26n.jpg"},
	{ "id":21, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img27n.jpg"},
	{ "id":22, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img28n.jpg"},
	{ "id":23, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img29n.jpg"},
	{ "id":24, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img30n.jpg"},
	{ "id":25, "category": "cover", "caption": "накриття стовпчика!", "url":"assets/img/img31n.jpg"},
	{ "id":26, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har25.jpg"},
	{ "id":27, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har16.jpg"},
	{ "id":28, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har17.jpg"},
	{ "id":29, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har18.jpg"},
	{ "id":30, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har19.jpg"},
	{ "id":31, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har20.jpg"},
	{ "id":32, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har21.jpg"},
	{ "id":33, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har22.jpg"},
	{ "id":34, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har23.jpg"},
	{ "id":35, "category": "different", "caption": "На здоров'я!", "url":"assets/img/har24.jpg"},
	
 ]

 


 

 