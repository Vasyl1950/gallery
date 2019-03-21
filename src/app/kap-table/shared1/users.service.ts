import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

public getUsers(): Array<any> {
return [
{
id: 1,
photo: '../img/ball.jpg',
caption: 'Кулька шліфована - мармурова крихта',
firstName: 'Д=20см',
secondName: 'Д=15см ',
lastName: '90грн',
last1Name: '60грн'
},
{
id: 2,
photo: '../img/photo0.jpg',
caption: 'Шляпка із мармурової крихти "Пішак"',
firstName: '45x45cm',
lastName: '490грн'
},
{
id: 3,
photo: '../img/photo1.jpg',
caption: 'Шляпка із мармурової крихти на білому цементі "Пішак"',
firstName: '45x45cm ',
lastName: '590грн'

},
{
id: 4,
photo: '../img/photo2.jpg',
caption: 'Шляпка із кулькою d=15cm на стовпчик паркана.',
firstName: '45x45cm',
secondName: '40x40cm',
lastName: '300грн',
last1Name: '270грн'
},
{
id: 5,
photo: '../img/photo3.jpg',
caption: 'Шляпка із кулькою d=15cm на стовпчик паркана/матеріал: мармурова крихта/',
firstName: '33x33cm',
lastName: '200грн'
},
{
id: 6,
photo: '../img/photo4.jpg',
caption: 'Шляпка "Піраміда" на стовпчик паркана',
firstName: '45x57cm',
lastName: '300грн'
},
{
id: 7,
photo: '../img/photo5.jpg',
caption: 'Шляпка "Піраміда" ',
firstName: '50х50см',
lastName: '330грн'
},
{
id: 8,
photo: '../img/photo6.jpg',
caption: 'Шляпка із кулькою',
firstName: '50х50см',
lastName: '390грн'
},
{
id: 9,
photo: '../img/photo7.jpg',
caption: 'Шляпка класична ',
firstName: '40х40см',
lastName: '220грн'
},
{
id: 10,
photo: '../img/photo8.jpg',
caption: 'Шляпка "Чешуя" ',
firstName: '45х45см',
lastName: '300грн'
},
{
id: 11,
photo: '../img/photo9.jpg',
caption: 'Шляпка "Медуза" ',
firstName: '45х45см',
lastName: '250грн'
},
{
id: 12,
photo: '../img/photo10.jpg',
caption: 'Шляпка "Медуза"із кулькою ',
firstName: '45х45см',
lastName: '300грн'
}

    ];
}
}
