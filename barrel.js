var BarrelScene = new Phaser.Class({
    Extends: Phaser.Scene,

    platform: null,
    BigDDDD: null,

    initialize: function BarrelScene () {
        Phaser.Scene.call(this, {key: 'BarrelScene'})
    },

    preload: function() {
        this.load.image('BigD', 'assets/BigD.jpg');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('BigH', 'assets/hero.jpg');
    },

    create: function () {

        console.log('You found a easter egg!');

        this.Hero = this.physics.add.sprite(400, 390, 'BigH').setScale(0.1);
        this.player = this.physics.add.sprite(750, -1000, 'BigD').setScale(0.25);
        this.platforms = this.physics.add.staticGroup();
        this.physics.add.collider(this.player, this.platforms, this.Hero);
        this.physics.add.collider(this.platforms, this.Hero);
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(480, 400, 'ground').setScale(2, 1).refreshBody();
        this.platforms.create(220, 250, 'ground').setScale(2,1).refreshBody();
        this.platforms.create(500, 130, 'ground').setScale(1.5).refreshBody();


    },

    update: function () {

    },


});