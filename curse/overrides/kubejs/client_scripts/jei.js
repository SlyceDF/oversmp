/* let removed;

onEvent('item.tags', event => {
  removed = event.get('kubejs:removed').getObjectIds()
}) */

onEvent('jei.hide.items', event => {
  // removed.forEach(ritem => event.hide(ritem))
  event.hide('#kubejs:removed')
})

onEvent('jei.add.items', event => {
event.add('minecraft:sculk_sensor')
event.add('minecraft:light')
event.add('minecraft:structure_void')
})
onEvent('jei.hide.fluids', event => {
event.hide('tconstruct:honey')
event.hide('pneumaticcraft:vegetable_oil')
})