/*
*
* Принцип работы скрипта. На странице ищется изображение в которой содержится ссылка типа #door , в зависимости от названия двери
* будет происходить поиск, пример #door=door1 , будет искаться изображение с название door1_alyaska_tracery.jpg случае если выбран
* цвет двери alyaska и стекло tracery.
*
* Входные параметры (прототип для ссылок цветов и картинки под дверь:
* название двери: #door=2u , 2d и.т.д
* название цветов двери: #color=1, 2, 3, 4, 5, 6, 7
* название ссылок на стёкл в зависимости от цвета: #glass=1, 2 , 3 , 4 , 5, 6
*
* */


$(function () {

    var github_url = '', // путь к папке где хранятся все изображения;
    $door = '', // название папки с дверью, берётся с картинки со страницы с #door=название папки
    $color = '', // какой цвет двери будем искать;
    $glass = '',  // какое стекло будем фильтровать;
    $filter_url = ''; // финальный путь для поиска изображения.


    function imgFilter(){

    }

    var imgFilter = function() {
        this.hello = function () {
            console.log('hello world;')
        }
    }

    $.get('https://evgeniyvorobev.github.io/testdveri/img/aktsiya-sentyabr.png')
        .done(function() {
            console.log('work')
        }).fail(function() {
        console.log('lol')
    })


})
