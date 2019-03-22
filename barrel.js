var BarrelScene = new Phaser.Class({
    Extends: Phaser.Scene,

    platform: null,
    BigDDDD: null,

    initialize: function BarrelScene () {
        Phaser.Scene.call(this, {key: 'BarrelScene'})
    },

    preload: function() {
        this.load.image('BigD', 'assets/BigD.jpg');
        this.load.image('BigP', 'assets/platform.png');
    },

    create: function () {
       this.BigDDDD= this.add.image(400, 300, 'BigD');
        console.log('You found a easter egg!');
        this.platform = this.add.image(400, 300, 'BigP');
    },

    update: function () {
        this.platform.angle++;
        this.BigDDDD.angle--;
    },


});