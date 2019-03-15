var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function BootScene () {
        Phaser.Scene.call(this, {key: 'BootScene'})
    },

    preload: function() {
        this.load.image('boot', 'assets/boot.png');
    },

    create: function () {
        this.add.image(400, 300, 'boot');
        this.add.text( 400, 0,"By Kent Smith");
        this.add.text( 350, 100, "I like them BIG I like them CuNkY- Moto Moto");

        this.input.on('pointerdown', function () {
            alert("I'm an anonymous function!");
        }, this);
    }


});

