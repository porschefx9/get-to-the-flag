namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 2 2 e e 9 9 9 9 9 9 9 
9 9 9 9 2 2 2 e e 9 9 9 9 9 9 9 
9 9 2 2 2 2 2 e e 9 9 9 9 9 9 9 
9 2 2 2 2 2 2 e e 9 9 9 9 9 9 9 
9 9 2 2 2 2 2 e e 9 9 9 9 9 9 9 
9 9 9 9 2 2 2 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 2 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true, effects.hearts)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(
            hex`140008000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a130a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a11110a0a0a0a0a110a110a110a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a1111110a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a1010101010050505050510101010050505050505`,
            img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 2 2 
. . . . . 2 . 2 . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.coral1,sprites.builtin.coral0,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.builtin.field1,sprites.builtin.crowd9,sprites.dungeon.hazardWater,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthEast1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.dungeon.collectibleRedCrystal,myTiles.tile2],
            TileScale.Sixteen
        ))
