var AnzahlStockwerke = 50;
var Breite = 60;
var HoeheStockwerk = 4;
var drone;
function BaueBodenplatte()
{
	drone = box( blocks.diamond , Breite, 1, Breite );
	drone.up(1);	
}
function BaueZwischendecke()
{
	drone.box( blocks.glowstone , Breite, 1, Breite );
	drone.up(1);			
}
function BaueStockwerk()
{
	drone.box0(blocks.glass, Breite, HoeheStockwerk, Breite);
	drone.up(HoeheStockwerk);	
}
function BaueDach()
{
	drone.box( blocks.glowstone , Breite, 1, Breite );		
	drone.up(1);			
	drone.box( blocks.diamond , Breite, 1, Breite );		

}

function GlowTow13()
{
	BaueBodenplatte();
	for ( i = 0; i < AnzahlStockwerke;i++)
	{
		BaueStockwerk();
		BaueZwischendecke();
		
	}
	BaueDach();
}
exports.GlowTow13 = GlowTow13;
