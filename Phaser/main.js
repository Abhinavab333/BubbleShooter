var mygame=new Phase.Game(800,600,Phaser.CANVAS,'');
var mainState={
	preload:function(){

	},
	create:function(){

	},
	update:function(){

	}
}
mygame.state.add('root',mainState);
mygame.state.start('mainState');