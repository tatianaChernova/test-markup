'use strict';

var Project = function Project() {
    this.menu = '.js-menu'; //мобильное меню
    this.tab = '[data-tab-trigger]'; // табы Тарифы  
    this.init();
};

Project.prototype = {
    init: function init() {       
        $(document).on('click', this.tab, $.proxy(this.eventTab, this)); // табы Тарифы
        $(document).on('click', this.menu, $.proxy(this.eventMenu, this));//мобильное меню
    },


    // Табы Тарифы
    eventTab: function eventTab(e) {
        if ($(document).find(this.tab).length > 0) {
            var $this = $(e.target).closest(this.tab);

            var id = $this.attr('data-tab-trigger'),
                content = $('[data-tab-content="' + id + '"]');

            $('.tab-header__item').removeClass('active');
            $this.addClass('active');

            $('.tab-content__item').removeClass('active');
            content.addClass('active');
        }
    },
    // Меню в шапке сайта
    eventMenu: function eventMenu(e) {
        e.preventDefault();
        $(document).find('.header__burger').toggleClass('active');
        $(document).find('.header__nav-wrap').toggleClass('active');
        $(document).find('.header__contact').toggleClass('active');
        $(document).find('.header__phone').toggleClass('active');
    },

};

var project = null;
$(document).ready(function () {

    project = new Project();

});

