var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,



    initialize: function BarrelScene () {
        Phaser.Scene.call(this, {key: 'BarrelScene'})
    },

    preload: function() {
        this.load.image('BigD', 'assets/BigD.jpg');
    },

    create: function () {
        console.log('You found a easter egg!');
        this.add.image(400, 300, 'BigD');
    },


});