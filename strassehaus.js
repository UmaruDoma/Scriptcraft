


var drone;
function Stockwerk() {
drone.box(blocks.glowstone,21,1,21);
drone.up(1);
for (var count = 0; count < 4; count++) {
  drone.box(blocks.glass,1,4,20);
  drone.fwd(20);
  drone.turn(1);
}
drone.down(1);
};
function Haus() {
for (var count2 = 0; count2 < 10; count2++) {
  Stockwerk();
  drone.up(5);
}
drone.down(50);
};
function strassehaus() {
drone = box(blocks.air,1,1,1);
for (var count3 = 0; count3 < 2; count3++) {
  Haus();
  drone.turn(1);
  drone.fwd(30);
  drone.turn(3);
}
drone.back(1);
drone.turn(3);
drone.fwd(60);
drone.turn(2);
drone.box(blocks.cobblestone,20,1,50);
};
 exports.strassehaus = strassehaus;
