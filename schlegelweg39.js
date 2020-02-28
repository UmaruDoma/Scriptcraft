var AnzahlStockwerke = 3;
var Breite = 9;
var HoeheStockwerk = 3;
var drone;
function BaueBodenplatte()
{
	box( blocks.wool.white , Breite, 1, Breite );
	drone.up(1);
}
function BaueZwischendecke()
{	
	drone.box( blocks.wool.white , Breite, 1, Breite );
	drone.up(1);
}
function BaueStockwerk()
{
	drone.box0(blocks.wool.white, Breite, HoeheStockwerk, Breite);
	drone.up(HoeheStockwerk);

}


function BaueFenster()

{
	
	drone.down(12);
	
	drone.right(2);
	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.right(3);
	
	drone.down();
	
	drone.box( blocks.air , 1, 2, 1 );
	
	drone.up();
	
	drone.right(2);
	
	drone.box( blocks.glass , 1, 1, 1 );
	
	drone.up(5);
	
	drone.left();
	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.left(4);
	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.up(3);
	
	drone.right(4)
	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.left(4);
	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.fwd(Breite);
	
	drone.turn(2)
;	
	drone.down(8)
;	
	drone.left(5);
	
	drone.fwd(1)
;	
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.right(3)
;
	drone.down()
;	
	drone.box( blocks.wooden.door , 1, 2, 1 );
	
	drone.up()
;
	drone.right(2)
;
	drone.box( blocks.glass , 2, 1, 1 );
	
	drone.box( blocks.gold , 1, 1, 2 );



}

function BaueKeller()
{
	drone = box( blocks.air , 1, 1, 1 );
	drone.down(HoeheStockwerk);
	drone.box( blocks.air , Breite, HoeheStockwerk, Breite );
	drone.up(HoeheStockwerk);
}

function BaueDach()
{
	drone.box( blocks.wool.white , Breite, 1, Breite );
	drone.up(1);
	drone.box( blocks.gravel , Breite, 1, Breite );
}


function Schlegelweg39()
{
	BaueKeller();
	BaueBodenplatte();
	for ( i = 0; i < AnzahlStockwerke;i++)
	{
		BaueStockwerk();
		BaueZwischendecke();

	}
	BaueDach();
	
	BaueFenster();
}

exports.Schlegelweg39 = Schlegelweg39;