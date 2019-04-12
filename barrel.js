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
        this.load.image('Barrel', 'assets/barrel.png');
    },


    create: function () {

        console.log('You found a easter egg!');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.Hero = this.physics.add.sprite(500, 390, 'BigH').setScale(0.1);
        this.barrel = this.physics.add.sprite(50, 50, 'Barrel').setScale(0.07);
        this.player = this.physics.add.sprite(750, -1000, 'BigD').setScale(0.25);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(510, 400, 'ground').setScale(2, 1).refreshBody();
        this.platforms.create(220, 250, 'ground').setScale(2,1).refreshBody();
        this.platforms.create(500, 130, 'ground').setScale(1.5).refreshBody();
        this.physics.add.collider(this.platforms, this.player);
        this.physics.add.collider(this.platforms, this.Hero);

        this.Hero.setCollideWorldBounds(true);

        this.physics.add.collider(this.platforms, this.barrel);
    },

    update: function () {

        if (this.cursors.left.isDown)
        {

            this.Hero.setVelocityX(-160);

        } else if (this.cursors.right.isDown)
        {
            this.Hero.setVelocityX(+160);

        } else {
            this.Hero.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.Hero.setVelocityY(-490);
        }
    },


});